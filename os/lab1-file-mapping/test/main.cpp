#pragma comment(lib, "../debug/OS10_HTAPI.lib")

#include "../OS10_HTAPI/pch.h"
#include "../OS10_HTAPI/HT.h"

using namespace std;

int main()
{
	ht::HtHandle* ht1 = nullptr;

#pragma region ht1

	try
	{
		cout << "### ht1 ###" << endl;
		ht1 = ht::open(L"./files/HTspace.ht");
		if (ht1)
			cout << "-- open: success" << endl;
		else
			throw "-- open: error";

		cout << "ht1: " << ht1->addr << endl;

		ht::Element* hte = ht::get(ht1, new ht::Element("key", 4));
		if (hte)
			cout << "-- get: success" << endl;
		else
			throw "-- get: error";

		ht::print(hte);
	}
	catch (const char* msg)
	{
		cout << msg << endl;

		if (ht1 != nullptr)
			cout << ht::getLastError(ht1) << endl;
	}

#pragma endregion

#pragma region ht2

	//try
	//{
	//	cout << "\n### ht2 ###" << endl;
	//	ht2 = ht::create(1000, 3, 10, 256, L"./files/HTspace2.ht");
	//	if (ht2)
	//		cout << "-- create: success" << endl;
	//	else
	//		throw "-- create: error";

	//	if (ht::insert(ht2, new ht::Element("key", 4, "payload", 8)))
	//		cout << "-- insert: success" << endl;
	//	else
	//		throw "-- insert: error";

	//	ht::Element* hte = ht::get(ht2, new ht::Element("key", 4));
	//	if (hte)
	//		cout << "-- get: success" << endl;
	//	else
	//		throw "-- get: error";

	//	ht::print(hte);
	//}
	//catch (const char* msg)
	//{
	//	cout << msg << endl;

	//	if (ht1 != nullptr)
	//		cout << ht::getLastError(ht1) << endl;
	//}

#pragma endregion

	try
	{
		if (ht1 != nullptr)
			if (ht::close(ht1))
				cout << "-- close: success (ht1)" << endl;
			else
				throw "-- close: error (ht1)";
	}
	catch (const char* msg)
	{
		cout << msg << endl;
	}
}