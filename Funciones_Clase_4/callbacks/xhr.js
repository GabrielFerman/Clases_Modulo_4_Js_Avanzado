"use strict";//Explicacion del programa clase 5 minuto 2:08  
//Esta es la forma vieja de hacer una peticion al servidor
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;//En esta linea se hace la peticion require al servidor y al paquete
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";//Esta es la url de donde se obtendran los datos
const url2 = "https://pokeapi.co/api/v2/pokemon/squirtle"

function getData(url, callback){
    let xhttp = new XMLHttpRequest();//Se crea el objeto xhttp del molde XMLHttpRequest

    xhttp.open("GET", url, true);

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4){//Esta linea checa el status de la peticion y el 4 es que ya se completo
            if (xhttp.status === 200){//Esta linea checa el status y el codigo 200 es ok checar http.cat o http.dog
                callback(JSON.parse(xhttp.responseText), null);
            } else {
                callback(null, "Algo salio mal intente mas tarde");
            }
        }
    };
    xhttp.send();
}

getData(url, (data, error) => {
    console.log(data, error);
    getData(url2, (data2, error2) => {//2da Peticion encadenada
        console.log(data2, error2);
    });
});