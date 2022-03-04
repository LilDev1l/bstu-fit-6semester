#pragma comment(lib, "../Debug/OS11_HTAPI.lib")

#include <string>
#include <sstream>
#include "../OS11_HTAPI/pch.h"
#include "../OS11_HTAPI/HT.h"

using namespace std;

string intToString(int number);

int main(int argc, char* argv[])
{
	ht::HtHandle* ht = ht::open(L"../debug/files/HTspace.ht");
	if (ht)
		cout << "-- open: success" << endl;
	else
		throw "-- open: error";

	while (true) {
		int numberKey = rand() % 50;
		string key = intToString(numberKey);
		cout << key << endl;

		ht::Element* element = new ht::Element(key.c_str(), key.length() + 1);
		if (ht::removeOne(ht, element))
			cout << "-- remove: success" << endl;
		else
			cout << "-- remove: error" << endl;

		delete element;

		Sleep(1000);
	}
}

string intToString(int number)
{
	stringstream convert;
	convert << number;

	return convert.str();
}
