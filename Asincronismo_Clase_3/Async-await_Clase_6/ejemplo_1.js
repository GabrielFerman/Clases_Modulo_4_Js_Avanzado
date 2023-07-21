const nombre = async () => {
    return "Carlos";
}


const saludar = async () => {
    nombreRecibido = await nombre();
    console.log("Hola " + nombreRecibido + " que bueno que si llegaste");
}

saludar();

