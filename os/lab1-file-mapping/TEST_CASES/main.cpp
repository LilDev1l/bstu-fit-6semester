#include "tests.h"

using namespace std;

int main()
{
	ht::HtHandle* ht = ht::create(1000, 3, 10, 256, L"./files/HTspace.ht");
	if (ht)
		cout << "-- create: success" << endl;
	else
		throw "-- create: error";

	#pragma region TEST1
	
	if (tests::test1(ht))
		cout << "-- test1: success" << endl;
	else
		cout << "-- test1: error" << endl;

	#pragma endregion TEST2

	if (tests::test2(ht))
		cout << "-- test2: success" << endl;
	else
		cout << "-- test2: error" << endl;

	#pragma region ht2



	#pragma endregion

	if (ht != nullptr)
		if (ht::close(ht))
			cout << "-- close: success" << endl;
		else
			throw "-- close: error";
}