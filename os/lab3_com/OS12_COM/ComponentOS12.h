#pragma once
#include "Interface.h"

extern long g_cComponents;		// Количество активных компонентов
extern long g_cServerLocks;		// Счетчик блокировок

// Компонент
//
class ComponentOS12 : public IAdder, public IMultiplier
{
public:
	// IUnknown
	virtual HRESULT __stdcall QueryInterface(const IID& iid, void** ppv);
	virtual ULONG __stdcall AddRef();
	virtual ULONG __stdcall Release();

	// Интерфейс IAdder
	STDMETHOD(Add(const double x, const double y, double& z));
	STDMETHOD(Sub(const double x, const double y, double& z));
	// Интерфейс IMultiplier
	STDMETHOD(Mul(const double x, const double y, double& z));
	STDMETHOD(Div(const double x, const double y, double& z));

	// Конструктор
	ComponentOS12() : m_cRef(1)
	{
		InterlockedIncrement(&g_cComponents);
	}
	// Деструктор
	~ComponentOS12()
	{
		InterlockedDecrement(&g_cComponents);
		std::cout << "Компонент:\t\tСаморазрушение" << std::endl;
	}

private:
	// Счетчик ссылок
	long m_cRef;
};