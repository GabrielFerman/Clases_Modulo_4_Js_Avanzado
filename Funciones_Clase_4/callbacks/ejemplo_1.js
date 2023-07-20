/*Ejemplo de callback de orden mayor
function otraFuncion(){
    code...
}

function ordenMayor(otraFuncion){
    return otraFuncion()
}*/

/*Ejemplo de funciones comunes
function otraFuncion(){
    code...
}
funtion callback(){
    return otraFuncion()
}*/

const suma = (a, b) => a + b;//Estas son funciones particulares que se usan para hacer callbacks en otra funcion de orden mayor o no.
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const potencia = (a, b) => a ** b;//Para hacer la potencia se puede hacer con Math.pow(a, b) o a ** b;
const calculadora = (a, b, operacion) => {
    return operacion(a, b);
};//Esta es una funcion generalista

console.log(calculadora(8, 4, suma));//Estos son los callbacks
console.log(calculadora(8, 4, resta));
console.log(calculadora(8, 4, multiplicacion));
console.log(calculadora(8, 4, division));
console.log(calculadora(2, 9, potencia));