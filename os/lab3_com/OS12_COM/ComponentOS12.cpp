#include "pch.h"
#include "ComponentOS12.h"

#pragma region Реализация IUnknown для компонента

HRESULT __stdcall ComponentOS12::QueryInterface(const IID& iid, void** ppv)
{
	if (iid == IID_IUnknown)
	{
		*ppv = (IAdder*)this;
	}
	else if (iid == IID_IAdder)
	{
		*ppv = (IAdder*)this;
		std::cout << "Компонент:\t\tВернуть указатель на IAdder" << std::endl;
	}
	else if (iid == IID_IMultiplier)
	{
		*ppv = (IMultiplier*)this;
		std::cout << "Компонент:\t\tВернуть указатель на IMultiplier" << std::endl;
	}
	else
	{
		*ppv = NULL;
		return E_NOINTERFACE;
	}

	((IUnknown*)*ppv)->AddRef();
	return S_OK;
}
ULONG __stdcall ComponentOS12::AddRef()
{
	return InterlockedIncrement(&m_cRef);
}
ULONG __stdcall ComponentOS12::Release()
{
	if (InterlockedDecrement(&m_cRef) == 0)
	{
		delete this;
		return 0;
	}
	return m_cRef;
}

#pragma endregion

#pragma region Реализация IAdder

STDMETHODIMP ComponentOS12::Add(const double x, const double y, double& z)
{ 
	z = x + y;
	return S_OK; 
}
STDMETHODIMP ComponentOS12::Sub(const double x, const double y, double& z)
{
	z = x - y;
	return S_OK;
}

#pragma endregion

#pragma region Реализация IMultiplier

STDMETHODIMP ComponentOS12::Mul(const double x, const double y, double& z)
{
	z = x * y;
	return S_OK;
}
STDMETHODIMP ComponentOS12::Div(const double x, const double y, double& z)
{
	z = x / y;
	return S_OK;
}

#pragma endregion

