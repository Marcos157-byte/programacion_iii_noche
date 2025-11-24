abstract class CuentaBase {
  
    private saldo: number=0;
    abstract obstracto_operar(): void;
    modificarSalgooperar(monto: number): void{
        this.saldo=monto;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
}

class CuentaAhorro extends CuentaBase {
    obstracto_operar(): void {
        console.log('Cuetna Ahorro')
    }
};
const micuenta = new CuentaAhorro();
micuenta.modificarSalgooperar(600);
micuenta.obstracto_operar();
console.log("saldo cuente ahorro", micuenta.consultarSaldo());
class CuentaCorriente extends CuentaBase {
    obstracto_operar(): void {
        console.log("Cuenta corriente")
    }
};
const micuenta1 = new CuentaCorriente();
micuenta1.modificarSalgooperar(500);
micuenta1.obstracto_operar();
console.log("saldo cuente corriente", micuenta1.consultarSaldo());



