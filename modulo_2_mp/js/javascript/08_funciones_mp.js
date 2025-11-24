console.log("FUNCIONES EN TIENDA DE JEANS");


console.log("FUNCIÓN SIMPLE");
function mostrarBienvenida() {
    console.log("Bienvenido/a a la tienda de jeans");
}
mostrarBienvenida();

console.log("FUNCIÓN CON PARÁMETROS");
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}
console.log("El total a pagar es:", calcularTotal(45, 2));

console.log("FUNCIÓN FLECHA");
const mensajePromocion = () => {
    console.log("Promoción activa: 2x1 en jeans seleccionados");
};
mensajePromocion();

console.log("FUNCIÓN FLECHA CON PARÁMETROS");
const aplicarDescuento = (precio, descuento) => {
    return precio - descuento;
};
console.log("Precio con descuento:", aplicarDescuento(100, 20));

console.log("FUNCIÓN RETORNO DIRECTO");
const calcularIVA = precio => precio * 0.15;
console.log("IVA de un jean de $50:", calcularIVA(50));


console.log("FUNCIONES CON PARÁMETROS POR DEFECTO");
function dividirInventario(totalJeans, cajas = 3) {
    return totalJeans / cajas;
}
console.log("Distribución en cajas:", dividirInventario(90, 6));
console.log("Distribución en cajas (por defecto):", dividirInventario(90));