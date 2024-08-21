const {generarNumerosAleatorios, contarFrecuencia} = require('./utils');

async function main(){
    try{
        const numeros = await generarNumerosAleatorios(10);
        console.log("Números aleatorios generados exitosamente");
        const frecuencia = await contarFrecuencia(numeros);
        console.log("Frecuencia de los números");
        console.log(frecuencia);
    }catch(error){
        console.error("Error durante la generación de números", error);
    }
}


main();