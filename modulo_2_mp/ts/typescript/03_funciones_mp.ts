function saludar(): string {
    return 'Hola desde una funcion Typescript';
}
console.log(saludar());

function sumas(): number {
    return 3+7;
}
console.log(sumas)

function suma(numero1: number, numero2: number): number{
    return numero1+ numero2;
}
console.log(suma(8,5));

function sumarOpcional(numero1: number, numero2?: number): number{
    return numero1+(numero2 ? numero2: 15);
}

console.log(sumarOpcional(19,5));
console.log(sumarOpcional(10));

const sumarFlecha = (numero1: number, numero2?: number): number => {
    return numero1 + (numero2 || 15);
}

console.log(sumarFlecha(19,6));
console.log(sumarFlecha(12));

function mosntrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
mosntrarMensaje('mensaje desde un boid');
