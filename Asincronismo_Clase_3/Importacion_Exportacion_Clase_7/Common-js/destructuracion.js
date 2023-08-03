let auto = {
    color: "Rojo",
    modelo: 2008,
    marca: "Vocho",
}

let autoColor = auto.color;
console.log("Este valor se saco con el metodo normal " + autoColor);

let { marca } = auto;

console.log("Este valor se saco mediante destructuracion " + marca); 

let { color, modelo } = auto;

console.log("Estos valores se tomaron con el metodo destructuracion " + color + modelo);
console.log("Estos valores ahora se asignaran a otro objeto: ");
console.log({color, modelo});

console.log("Chequemos que los valores sigan intactos en el objeto original auto: " + auto.color);
console.log("Chequemos que los valores sigan intactos en el objeto original auto: " + auto.modelo);
console.log("Chequemos que los valores sigan intactos en el objeto original auto: " + auto.marca);