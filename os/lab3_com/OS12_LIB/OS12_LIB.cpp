// OS12_LIB.cpp : Определяет функции для статической библиотеки.
//

#include "pch.h"
#include "framework.h"
#include "OS12.h"
#include "../OS12_COM/Interface.h"

static const GUID CLSID_ComponentOS12 =
{ 0x692c66d1, 0x3ce5, 0x4512, { 0xa3, 0x11, 0x78, 0x26, 0x18, 0xdb, 0xc7, 0xa6 } };

IAdder* pIAdder = nullptr;
IMultiplier* pMultiplier = nullptr;

OS12HANDEL OS12::Init() {
	IUnknown* pIUnknown = NULL;
	CoInitialize(NULL);                        // инициализация библиотеки OLE32
	HRESULT hr0 = CoCreateInstance(CLSID_ComponentOS12, NULL, CLSCTX_INPROC_SERVER, IID_IUnknown, (void**)&pIUnknown);
	if (SUCCEEDED(hr0))
	{
		return pIUnknown;
	}
	else {
		throw (int)hr0;
		return NULL;
	}
}

void OS12::Dispose(OS12HANDEL h) {
	((IUnknown*)h)->Release();
	CoFreeUnusedLibraries();
	CoUninitialize();
}

double OS12::Adder::Add(OS12HANDEL h, double x, double y)
{
	double result = 0.0;
	HRESULT hr0 = ((IUnknown*)h)->QueryInterface(IID_IAdder, (void**)&pIAdder);
	if (SUCCEEDED(hr0))
	{
		HRESULT hr1 = pIAdder->Add(x, y, result);
		if (!SUCCEEDED(hr1)) {
			pIAdder->Release();
			throw (int)hr1;
			return -1;
		}
		else {
			pIAdder->Release();
			return result;
		}
	}
	else {

		throw (int)hr0;
		return -1;
	}
}

double OS12::Adder::Sub(OS12HANDEL h, double x, double y)
{
	double result = 0.0;
	HRESULT hr0 = ((IUnknown*)h)->QueryInterface(IID_IAdder, (void**)&pIAdder);
	if (SUCCEEDED(hr0))
	{
		HRESULT hr1 = pIAdder->Sub(x, y, result);
		if (!SUCCEEDED(hr1)) {
			pIAdder->Release();
			throw (int)hr1;
			return -1;
		}
		else {
			pIAdder->Release();
			return result;
		}
	}
	else {
		throw (int)hr0;
		return -1;
	}
}

double OS12::Multiplier::Mul(OS12HANDEL h, double x, double y)
{
	double result = 0.0;
	HRESULT hr0 = ((IUnknown*)h)->QueryInterface(IID_IMultiplier, (void**)&pMultiplier);
	if (SUCCEEDED(hr0))
	{
		HRESULT hr1 = pMultiplier->Mul(x, y, result);
		if (!SUCCEEDED(hr1)) {
			pMultiplier->Release();
			throw (int)hr1;
			return -1;
		}
		else {
			pMultiplier->Release();
			return result;
		}
	}
	else {

		throw (int)hr0;
		return -1;
	}
}

double OS12::Multiplier::Div(OS12HANDEL h, double x, double y)
{
	if (y == 0) {
		throw 0;
	}
	double result = 0.0;
	HRESULT hr0 = ((IUnknown*)h)->QueryInterface(IID_IMultiplier, (void**)&pMultiplier);
	if (SUCCEEDED(hr0))
	{
		HRESULT hr1 = pMultiplier->Div(x, y, result);
		if (!SUCCEEDED(hr1)) {
			pMultiplier->Release();
			throw (int)hr1;
			return -1;
		}
		else {
			pMultiplier->Release();
			return result;
		}
	}
	else {
		throw (int)hr0;
		return -1;
	}
}
