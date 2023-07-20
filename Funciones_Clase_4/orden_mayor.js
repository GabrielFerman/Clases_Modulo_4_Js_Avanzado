function otrafuncion(name){
    console.log("Esta funcion es una funcion de orden menor " + name);
}

function ordenMayor(otrafuncion){
    return otrafuncion("Mauricio");
};

const ordenMayorFlecha = (otrafuncion) => {};  

let ejemplo = otrafuncion("Mauricio");

console.log(ordenMayor());