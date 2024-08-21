//Genero las funciones necesraias para
/**
 * 
 */
const generarUnNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min +1)) + 1;

const generarNumerosAleatorios = cantidad => {
    return new Promise((resolve, reject) => {
        let numeros = [];
        for(let i = 0; i < cantidad; i++){
            numeros.push(generarNumerosAleatorios(1,20))
        }
        resolve(numeros);
    });
}

const contarFrecuencia = numeros => {
    return new Promise( (resolve, reject) =>{
        const frecuencia = {};
        numeros.forEach(
            numero => {
                if(frecuencia[numero]){
                    frecuencia[numero]++;
                } else{
                    frecuencia[numero] = 1;
                }
            }
        );
        resolve(frecuencia);
    });
}

module.exports = { generarNumerosAleatorios, contarFrecuencia}; 