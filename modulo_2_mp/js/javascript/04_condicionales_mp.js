console.log("CONDICIONALES EN TIENDA DE JEANS");


console.log("CONDICIONAL IF");

let temperaturaBodega = 45;
if (temperaturaBodega > 30) {
    console.log(" La bodega está muy caliente, revisar ventilación");
}


console.log("CONDICIONAL IF ELSE");

const claveAcceso = "jeans2025";
if (claveAcceso === "jeans2025") {
    console.log("Usuario autorizado para gestionar inventario");
} else {
    console.log(" Usuario no autorizado");
}


console.log("CONDICIONAL ANIDADOS");

const edadCliente = 19;
const tieneMembresia = true;

if (edadCliente >= 18) {
    if (tieneMembresia === true) {
        console.log("Cliente puede acceder a descuentos exclusivos");
    } else {
        console.log("Cliente mayor de edad, pero necesita membresía para descuentos");
    }
} else {
    console.log("Cliente menor de edad, no puede comprar sin acompañante");
}


console.log("CONDICIONAL SWITCH");

const diaSemana = "lunes";
switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Día laboral: se reciben y despachan pedidos");
        break;
    case "sabado":
    case "domingo":
        console.log("Fin de semana: promociones especiales en jeans");
        break;
    default:
        console.log("Día no reconocido en el calendario de la tienda");
}