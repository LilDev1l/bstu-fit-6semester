#pragma comment(lib, "../Debug/OS11_HTAPI.lib")

#include <conio.h>
#include "../OS11_HTAPI/pch.h"
#include "../OS11_HTAPI/HT.h"

using namespace std;

wchar_t* getWC(const char* c);

int main(int argc, char* argv[])
{
	ht::HtHandle* ht = nullptr;

	wchar_t* fileName = getWC(argv[1]);
	ht = ht::open(fileName, false);
	if (ht)
	{
		cout << "HT-Storage Start" << endl;
		wcout << "filename: " << ht->fileName << endl;
		cout << "secSnapshotInterval: " << ht->secSnapshotInterval << endl;
		cout << "capacity: " << ht->capacity << endl;
		cout << "maxKeyLength: " << ht->maxKeyLength << endl;
		cout << "maxPayloadLength: " << ht->maxPayloadLength << endl;

		while (!kbhit())
			SleepEx(0, TRUE);

		ht::close(ht);
	}
	else
		cout << "-- open: error" << endl;
}

wchar_t* getWC(const char* c)
{
	wchar_t* wc = new wchar_t[strlen(c) + 1];
	mbstowcs(wc, c, strlen(c) + 1);

	return wc;
}
