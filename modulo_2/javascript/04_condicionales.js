console.log("CONDICIONALES");
console.log("CONDICIONAL IF");

let temperatura=45;
if(temperatura>30){
    console.log("Hace calor");
}
console.log("CONDICIONALES IF ELSE")
const password="password123";
if(password=="password123"){
    console.log("Usuario logueado");
}else{
    console.log("Usuario No Autorizado");
}

console.log("CONDICIONAL ANIDADOS");

const edad=19;
const tieneLicencia=true;
if(edad>18){
    if(tieneLicencia==true){
        console.log("Puede Conducir");
    }else{
        console.log("Necesita Licencia");
    }
}else{
    console.log("Eres menor de edad");
}
console.log("CONDICIONAL SWITCH");

const dia= "lunes";
switch(dia){
    case "lunes":
    case "martes":
    case "miercoes":
    case "jueves":
    case "viernes":
        console.log("dia laborar")
        break;
    case "sabado":
    case "domingo":
        break;
    default:
        console.log("fin de semana laboral");
}
