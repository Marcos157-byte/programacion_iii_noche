console.log("CICLOS CON WHILE EN TIENDA DE JEANS");


let stock = 1;
while (stock <= 3) {
    console.log("Jean en inventario número:", stock);
    stock++;
}


let precios = [30, 40, 25, 50, 60];
let indice = 0;
while (precios[indice] > 0) {
    console.log("Precio válido:", precios[indice]);
    indice++;
}


while (talla < 10) {
    if (talla % 2 !== 0) {
        console.log("Talla", talla, "es impar (ejemplo de control de stock)");
    }
    talla++;
}


let pedido = 2;
do {
    console.log("Procesando pedido número:", pedido);
    pedido++;
} while (pedido < 5);


let contadorVentas = 1;
let ventasAcumuladas = 0;
do {
    ventasAcumuladas += contadorVentas * 10; 
    contadorVentas++;
} while (contadorVentas <= 5);
console.log("Ventas acumuladas en 5 días:", ventasAcumuladas);

let inventario = 5;
do {
    console.log("Inventario restante:", inventario);
    inventario--;
} while (inventario >= 0);

let cantidad = 1;
const precioBase = 20;
do {
    console.log(`${cantidad} * ${precioBase} = ${cantidad * precioBase} (Total por ${cantidad} jeans)`);
    cantidad++;
} while (cantidad <= 10);