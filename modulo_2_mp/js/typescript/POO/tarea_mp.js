var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CuentaBase = /** @class */ (function () {
    function CuentaBase() {
        this.saldo = 0;
    }
    CuentaBase.prototype.modificarSalgooperar = function (monto) {
        this.saldo = monto;
    };
    CuentaBase.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return CuentaBase;
}());
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaAhorro.prototype.obstracto_operar = function () {
        console.log('Cuetna Ahorro');
    };
    return CuentaAhorro;
}(CuentaBase));
;
var micuenta = new CuentaAhorro();
micuenta.modificarSalgooperar(600);
micuenta.obstracto_operar;
console.log("saldo cuente ahorro", micuenta.consultarSaldo);
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaCorriente.prototype.obstracto_operar = function () {
        console.log("Cuenta corriente");
    };
    return CuentaCorriente;
}(CuentaBase));
;
var micuenta1 = new CuentaCorriente();
micuenta1.modificarSalgooperar(500);
micuenta1.obstracto_operar;
console.log("saldo cuente corriente", micuenta1.consultarSaldo);
