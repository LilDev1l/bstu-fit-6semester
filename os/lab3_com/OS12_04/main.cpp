#include <iostream>

#pragma comment(lib, "../Debug/OS12_LIB.lib")
#include "../OS12_LIB/OS12.h"

using namespace std;
int main()
{
	setlocale(LC_ALL, "Russian");

	try
	{
		cout << "Инициализация компонентов:" << endl;
		OS12HANDEL h1 = OS12::Init();
		OS12HANDEL h2 = OS12::Init();


		cout << endl << "Вызов функций:" << endl;
		cout << "OS12::Adder::Add(h1, 2, 3) = " << OS12::Adder::Add(h1, 2, 3) << "\n";
		cout << "OS12::Adder::Add(h2, 2, 3) = " << OS12::Adder::Add(h2, 2, 3) << "\n";

		cout << "OS12::Adder::Sub(h1, 2, 3) = " << OS12::Adder::Sub(h1, 2, 3) << "\n";
		cout << "OS12::Adder::Sub(h2, 2, 3) = " << OS12::Adder::Sub(h2, 2, 3) << "\n";

		cout << "OS12::Multiplier::Mul(h1, 2, 3) = " << OS12::Multiplier::Mul(h1, 2, 3) << "\n";
		cout << "OS12::Multiplier::Mul(h2, 2, 3) = " << OS12::Multiplier::Mul(h2, 2, 3) << "\n";

		cout << "OS12::Multiplier::Div(h1, 2, 3) = " << OS12::Multiplier::Div(h1, 2, 3) << "\n";
		cout << "OS12::Multiplier::Div(h2, 2, 3) = " << OS12::Multiplier::Div(h2, 2, 3) << "\n";

		cout << endl << "Удалить компоненты и выгрузить dll:" << endl;
		OS12::Dispose(h1);
		OS12::Dispose(h2);
	}
	catch (int e) { cout << "OS12: error = " << e << "\n"; }

}
