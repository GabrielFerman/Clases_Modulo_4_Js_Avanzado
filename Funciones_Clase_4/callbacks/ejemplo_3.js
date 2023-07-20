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

hola();
adios();
//Resolver saludar primero con callbacks
