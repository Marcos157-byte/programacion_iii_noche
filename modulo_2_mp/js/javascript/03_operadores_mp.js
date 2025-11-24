console.log("OPERADORES EN TIENDA DE JEANS");

console.log("OPERACIONES ARITMÉTICAS CON PRECIOS");

const precioJean = 45;
const cantidad = 2;

const total = precioJean * cantidad;
console.log(`${precioJean} * ${cantidad} = ${total} (Total a pagar)`);

const descuento = 10;
const precioConDescuento = total - descuento;
console.log(`${total} - ${descuento} = ${precioConDescuento} (Precio final con descuento)`);

const precioUnitario = total / cantidad;
console.log(`${total} / ${cantidad} = ${precioUnitario} (Precio unitario)`);

const resto = total % cantidad;
console.log(`${total} % ${cantidad} = ${resto} (Resto al dividir)`);

const potenciaEjemplo = precioJean ** cantidad;
console.log(`${precioJean} ** ${cantidad} = ${potenciaEjemplo} (Ejemplo de potencia)`);


console.log("OPERADORES DE COMPARACIÓN ENTRE TALLAS");

const tallaCliente = "32";
const tallaStock = 32;

console.log(`Igualdad débil (==): ${tallaCliente} == ${tallaStock} → ${tallaCliente == tallaStock}`);
console.log(`Igualdad estricta (===): ${tallaCliente} === ${tallaStock} → ${tallaCliente === tallaStock}`);
console.log(`Desigualdad débil (!=): ${tallaCliente} != ${tallaStock} → ${tallaCliente != tallaStock}`);
console.log(`Desigualdad estricta (!==): ${tallaCliente} !== ${tallaStock} → ${tallaCliente !== tallaStock}`);
console.log(`Mayor que: ${tallaCliente} > ${tallaStock} → ${tallaCliente > tallaStock}`);
console.log(`Menor que: ${tallaCliente} < ${tallaStock} → ${tallaCliente < tallaStock}`);
console.log(`Mayor o igual: ${tallaCliente} >= ${tallaStock} → ${tallaCliente >= tallaStock}`);
console.log(`Menor o igual: ${tallaCliente} <= ${tallaStock} → ${tallaCliente <= tallaStock}`);

// OPERADORES LÓGICOS
console.log("OPERADORES LÓGICOS EN DISPONIBILIDAD");

const enStock = true;
const tallaDisponible = tallaCliente == tallaStock;

console.log(`AND (Y): enStock && tallaDisponible → ${enStock && tallaDisponible}`);
console.log(`OR (O): enStock || tallaDisponible → ${enStock || tallaDisponible}`);
console.log(`NOT (!): !enStock → ${!enStock}`);
console.log(`Combinado: !(enStock || tallaDisponible) → ${!(enStock || tallaDisponible)}`);