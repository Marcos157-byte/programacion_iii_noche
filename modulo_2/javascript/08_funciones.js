console.log("FUNCIONES");
console.log("FUNCION SIMPLE");
function saludar(){
    console.log("Hola mundo");
}
saludar();


console.log("Funcion ocn parametros");
function suma(a,b){
    return a+b;
}
console.log("la suma es ",suma(1,2));


console.log("FUNCION FLECHA");
const funcionFlecha=()=>{
    console.log("Hola mundo desde la funcion flecha")

}
funcionFlecha();


console.log("FUNCION FLECHA CON PARAMETROS");
const multiplicacion=(n,m)=>{
    return n*m

}
console.log(multiplicacion(4,4));


console.log("FUNCION RETORNO DIRECTO");
const cuadrado= x=>x*x;
console.log(cuadrado(5));

console.log("FUNCIONES CON PARAMETROS POR DEFECTO");

function divicion(z,k=3){
    return z/k
}
console.log("La divicion es:",divicion(40,8));
console.log("La divicion es: ",divicion(40));