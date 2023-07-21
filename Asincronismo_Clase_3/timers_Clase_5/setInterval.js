let i=0;

let contador = setInterval(() => {
    if(i <= 10){
        return console.log(i++);
    }
    return clearInterval(contador);
},1000);
