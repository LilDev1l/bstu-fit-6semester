#pragma once

static const GUID IID_IAdder =
{ 0xe5c68a2d, 0x67f, 0x4240, { 0x9d, 0xbd, 0xfe, 0x4e, 0x4a, 0xa, 0xa6, 0x6c } };

interface IAdder : IUnknown {
    STDMETHOD(Add(const double x, const double y, double& z)) PURE;
    STDMETHOD(Sub(const double x, const double y, double& z)) PURE;
};

static const GUID IID_IMultiplier =
{ 0xe5850b11, 0x565c, 0x4812, { 0xa8, 0xc9, 0x3b, 0x62, 0xcc, 0x6e, 0xec, 0x9a } };
 
interface IMultiplier : IUnknown {
    STDMETHOD(Mul(const double x, const double y, double& z)) PURE;
    STDMETHOD(Div(const double x, const double y, double& z)) PURE;
};