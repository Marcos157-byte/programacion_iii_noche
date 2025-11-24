console.log("CICLOS O BUCLES EN TIENDA DE JEANS");
console.log("FOR...OF");


const clientes = ["Carlos", "María", "Lucía", "Pedro"];
for (const cliente of clientes) {
    console.log("Bienvenido/a a la tienda,", cliente);
}
const marca = "Levis";
for (const letra of marca) {
    console.log("Letra de la marca:", letra);
}


const precios = [25, 40, 60, 35, 80, 55];
let precioMayor = 0;
for (const precio of precios) {
    if (precio > precioMayor) precioMayor = precio;
}
console.log("El precio más alto es:", precioMayor);

console.log("FOR...IN");


const producto = {
    nombre: "Jean Skinny",
    talla: "32",
    precio: 45
};
for (const clave in producto) {
    console.log("Clave:", clave, "→", producto[clave]);
}


const ventas = {
    enero: 120,
    febrero: 95,
    marzo: 150
};
let totalMeses = 0;
for (const mes in ventas) {
    totalMeses++;
    console.log(`Ventas en ${mes}: ${ventas[mes]} jeans`);
}
console.log("Número de meses registrados:", totalMeses);