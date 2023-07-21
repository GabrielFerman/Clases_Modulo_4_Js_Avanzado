//Forma de crear una promesa
let x = 10;

const promesa = new Promise((resolve,reject) => {//Formato de la promesa
    if (x === 10){
        resolve("Promesa Resuelta.....");
    } else {
        reject("Promesa rechazada.....")
    }
});

//2.Forma de consumir una promesa
promesa
.then((response) => {
    console.log(response)
    return 4;
})
.then((numero) => {//Con esta linea se cacha el valor que retorno el anterior then de 4 en la variable numero
    console.log("El resultado de " + numero + " x " + numero + " es " + numero*numero);
})
.then(() => {
    console.log("Hola este es un proceso intermedio")
})
.then(() => {
    console.log("Adios");
})
.catch((error) => {
    console.error(error);
});