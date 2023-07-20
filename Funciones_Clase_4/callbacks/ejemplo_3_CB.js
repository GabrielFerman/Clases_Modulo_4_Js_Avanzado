//Resolver saludar primero con callback

const hola_cb = (otraFuncion) => {
    setTimeout(() => {
        console.log("Hola con callback");
        otraFuncion();
    }, 1500);
}

const adios_cb = () => {
    setTimeout(() => {
        console.log("Adios con callback");
    }, 1000);
}


hola_cb(adios_cb);//En funciones no se puede poner un argumento como funcion o sea sin parentesis