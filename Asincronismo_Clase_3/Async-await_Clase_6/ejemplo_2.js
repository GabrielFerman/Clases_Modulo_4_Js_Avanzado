let a, b;

async function resta(a, b){
    console.log("La resta de los numeros " + a + " y " + b + " es " + (a - b));
    return a - b;
}

const suma = async (a, b) => {
    console.log("La suma de los numeros " + a + " y " + b + " es " + (a + b));
    return a + b;
}

async function valores(){
    c =  await suma(10, 7);
    d =  await resta(10, 7);
    console.log("La multiplicacion de los numeros " + c + " y " + d + " es " + (c * d));
}

console.log(suma(10, 7));
console.log(resta(10, 7));
console.log(valores());

setTimeout(() => {
    console.log("Este es el fin del programa gracias por ser un usuario fiel");
}, 3500);