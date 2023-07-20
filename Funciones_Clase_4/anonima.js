(function (){
    return console.log("Esta es una funcion anonima");
})

();

(() => console.log("Esta es una funcion anonima de flecha"))
();

(function (a,b){
    result = a + b;
    return console.log("Esta es una funcion anonima con parametros y un resultado que es " + result);
})

(8,9);

((a,b) => console.log("Esta es una function arrow anonima con parametros y un resultado " + (a+b)))

(4,7);