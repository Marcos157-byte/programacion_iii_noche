import {Vehiculo} from "./05_herencia.ts";

class Camion extends Vehiculo {
    private capacidadCarga: number;

    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    };
    getCapacidad(): number {
        return this.capacidadCarga;
    }
};

const miCamion = new Camion('Ford');
miCamion.setCapacidad(500);
console.log('capacidad', miCamion.getCapacidad(), 'kg');
miCamion.moverse();