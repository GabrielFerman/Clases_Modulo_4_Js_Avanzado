console.log("Hola este es mi primera linea fuera del navegador");
let a = 10;
let b = 5;

function calculadora(a,b){
    suma = a+b;
    resta = a-b;
    multiplicacion = a+b;
    division = Math.floor(a/b);
    console.log("Esta es la suma de los numeros "+ suma);
    console.log("Esta es la resta de los numeros "+ resta);
    console.log("Esta es la multiplicacion de los numeros "+ multiplicacion);
    console.log("Esta es la division de los numeros "+ division);
}
calculadora(9,7);

function grettings(){
    console.log("Hola saludos");
    console.log("Este programa es solo la demostracion de node.js");
    console.log("Empezare usando nodemon para visualizar los cambios en tiempo real");
    console.log("Esto se logra abriendo el archivo con el comando nodemon");
    console.log("Me equivoque y parece que ya va a funcionar");
    console.log("Ahora no se como salir de nodemon");
}
grettings();

console.log("Ahora solo queda ver como hago mis commits en git hub");
