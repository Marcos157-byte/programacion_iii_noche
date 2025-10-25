console.log("CICLOS CON WHILE");
console.log("WHILE")

let i=1;
while(i<=3){
    console.log("Condator",i);
    i++;
}

let valores=[3,4,2,4,5];
let indice=0;
while (valores[indice]>0){
    console.log("Valor valido", valores[indice]);
    indice++;
}

let n=1;
while(n<10){
    if(n%2!==0){
        console.log(n,"Es impar:")
    }
    n++;
}


let x=2;
do{
    console.log("interaccion: ", x);
    x++;
} while(x<5);

let contador=1;
suma=0;
do{
    suma+=contador;
    contador++;
} while (contador<=5);
console.log("La suma es: ", suma);

let reduccion=5;
do {
    console.log("reduccion", reduccion);
    reduccion--;
} while (reduccion>=0);

let mul=1;

do{
    console.log(mul,"*", 6,"=", mul*6 );
    mul++;
} while(mul<=10);

