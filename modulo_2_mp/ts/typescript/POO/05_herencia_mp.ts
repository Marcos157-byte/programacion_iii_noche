export class Vehiculo {
    public marca: string;
    constructor(marca: string){
        this.marca=marca;
    }
    moverse(): void{
        console.log(this.marca, 'Se encuentra en movimiento');
    }
}

class Moto extends Vehiculo{};
const miNoto = new Moto('honda');
miNoto.moverse();
