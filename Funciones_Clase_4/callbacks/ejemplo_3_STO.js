const hola = () => {
    setTimeout(() => {
        console.log("Hola");
    }, 1500);
}

const adios = () => {
    setTimeout(() => {
        console.log("Adios");
    }, 1000);
}

//Resolver saludar primero con setTimeout
function saludarPrimero(){
    return hola(), setTimeout(() => {
        adios()
    }, 1000);
}

console.log(saludarPrimero());