#pragma once
#include "../OS14_HTCOM/Interface.h"

#define OS14_HTCOM_HANDEL void*

namespace OS14_HTCOM
{
	OS14_HTCOM_HANDEL Init();                                // инициализация OS12
	//   if CoCreateInstance(... IID_Unknown)!= succesfull --> throw (int)HRESULT  
	namespace HT
	{
		ht::HtHandle* create(OS14_HTCOM_HANDEL h, int capacity, int secSnapshotInterval, int maxKeyLength, int maxPayloadLength, const wchar_t* htUsersGroup, const wchar_t* fileName);
		ht::HtHandle* open(OS14_HTCOM_HANDEL h, const wchar_t* fileName, bool isMapFile = false);
		ht::HtHandle* open(OS14_HTCOM_HANDEL h, const wchar_t* fileName, const wchar_t* htUser, const wchar_t* htPassword, bool isMapFile = false);
		BOOL snap(OS14_HTCOM_HANDEL h, ht::HtHandle* htHandle);
		BOOL close(OS14_HTCOM_HANDEL h, ht::HtHandle* htHandle);
		BOOL insert(OS14_HTCOM_HANDEL h, ht::HtHandle* htHandle, const ht::Element* element);
		BOOL removeOne(OS14_HTCOM_HANDEL h, ht::HtHandle* htHandle, const ht::Element* element);
		ht::Element* get(OS14_HTCOM_HANDEL h, ht::HtHandle* htHandle, const ht::Element* element);
		BOOL update(OS14_HTCOM_HANDEL h, ht::HtHandle* htHandle, const ht::Element* oldElement, const void* newPayload, int newPayloadLength);
		const char* getLastError(OS14_HTCOM_HANDEL h, ht::HtHandle* htHandle);
		void print(OS14_HTCOM_HANDEL h, const ht::Element* element);
	}
	namespace Element
	{
		ht::Element* createGetElement(OS14_HTCOM_HANDEL h, const void* key, int keyLength);
		ht::Element* createInsertElement(OS14_HTCOM_HANDEL h, const void* key, int keyLength, const void* payload, int  payloadLength);
		ht::Element* createUpdateElement(OS14_HTCOM_HANDEL h, const ht::Element* oldElement, const void* newPayload, int  newPayloadLength);
	}
	void Dispose(OS14_HTCOM_HANDEL h);                       // завершение работы с OS12                  
}
