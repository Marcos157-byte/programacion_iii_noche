interface Usuario{
    id: number,
    nombre: string,
    correo: string

}

const usuario1: Usuario = {
    id: 1,
    nombre: 'Marcos',
    correo: 'hola@gmail.com'
}

console.log(usuario1)
console.log(usuario1.nombre);

interface Producto {
    id: number,
    nombre: string,
    precio?: number,
}

const producto1: Producto = {
    id: 1,
    nombre:'laptop',
    precio?:number,
}

