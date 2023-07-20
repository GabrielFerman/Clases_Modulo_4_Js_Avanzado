/*function sumTwoNumbers(a,b){ //Forma de function normal
    let result = a + b;
    return result;
}

sumTwoNumbers(32,78);
console.log(sumTwoNumbers(32,78));
*/

const sumTwoNumbers_explicito = (a,b) => {//Forma de function arrow explicito
    let result = a+b;
    return result;
 }

console.log(sumTwoNumbers_explicito(46,98)); 

const sumTwoNumbers_implicito = (a, b) => a + b; //arrow function implicito solo retorna un valor

console.log(sumTwoNumbers_implicito(13,67));

const saludar = name => "Hola " + name;// arrow function sin parentesis solo tiene un parametro

console.log(saludar("Mauricio"));

//prototipos creados a partir de una funcion constructora
function Animal(){
    this.especie;
    this.origen;
    this.habilidad;
}

class Animal_2{//Azucar sintactica pero en realidad es un prototipo
    constructor(especie, origen, habilidad){
        this.especie = especie;
        this.origen = origen;
        this.habilidad = habilidad;
    }
}

console.log(saludar("Maxito"));

let gato = new Animal_2();

console.log(gato);
gato.especie = "felino";

console.log(gato.especie);
