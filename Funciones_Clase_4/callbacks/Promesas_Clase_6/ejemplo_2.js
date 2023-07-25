let nombre = "Carlos";

const promesa = new Promise((resolve, reject) => {
    if (nombre == "Carlos"){
        resolve("Hola " + nombre + " esta promesa se cumplio");
    } else {
        reject("Esta promesa no se cumplio");
    }
});

promesa
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});
