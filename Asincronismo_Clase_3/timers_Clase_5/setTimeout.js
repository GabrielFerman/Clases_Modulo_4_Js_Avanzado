function twosecs(){//Forma con una funcion externa y usando un callback
    console.log("Han pasado 2 segundos");
}

setTimeout(twosecs, 2000);

setTimeout(() => {//Forma de funcion anonima e interna que solo se usara en este setTimeout
    console.log("Ha pasado un segundo")
}, 1000);