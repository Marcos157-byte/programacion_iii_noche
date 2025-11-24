console.log("CICLOS O BUCLES EN TIENDA DE JEANS");


for (let i = 1; i <= 5; i++) {
    console.log("Jean número:", i);
}


let ventasTotales = 0;
for (let dia = 1; dia <= 5; dia++) {
    ventasTotales += dia * 10; 
}
console.log("Ventas totales en 5 días:", ventasTotales);

let marca = "Levis";
for (let i = 0; i < marca.length; i++) {
    console.log("Letra de la marca:", marca[i]);
}

for (let talla = 1; talla <= 5; talla++) {
    console.log(`Cuadrado de la talla ${talla} = ${talla * talla}`);
}