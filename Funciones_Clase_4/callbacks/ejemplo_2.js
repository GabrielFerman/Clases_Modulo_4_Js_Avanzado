function soyCien(){
    return 100;
}

function soyDoscientos(){
    return 200;
}

function sumaDosFunciones(unaFuncion, otraFuncion){
    const suma = unaFuncion() + otraFuncion();
    return suma;
}

console.log(soyCien());
console.log(soyDoscientos());
console.log(sumaDosFunciones(soyCien, soyDoscientos));//Esta es la funcion con callback
