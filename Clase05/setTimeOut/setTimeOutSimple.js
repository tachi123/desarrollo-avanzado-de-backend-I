console.log("Inicio");

setTimeout(
    //RECIBE UNA FUNCIÓN
    function() {
        console.log("Esta función se ejecuta después de 2 segundos.")
    }
    , 5000 //2 segundos = 2000 ms
);

console.log("Fin");