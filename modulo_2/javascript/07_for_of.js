console.log("CICLOS O BUVLES");
console.log("FOR OF");

const nombres=["Jose","Juan","Pedro","Simon"];
for (const nombre of nombres){
    console.log("Hola",nombre);
}

const nombre="Fransisco";
for(const letra of nombre){
    console.log("letra",letra);
}

numeros=[1,2,322,4,5,8,90];
mayor=0;
for(const numero of numeros){
    if(numero > mayor) mayor=numero;
       
}
console.log("el numero mayor es:", mayor);


const personas = {
    nombre:"AnAKIN",
    apellido:"Nose",
    profesion:"Jedi"
}
for(persona in personas){
    console.log("clve",persona,":", personas[persona]);
}

const libros = {
    titulo:"hola",
    anio:"2003/3/12",
    ventas:"300"
}
suma_clves=0;
for(libro in libros){
    suma_clves++;
       
}
console.log(suma_clves);