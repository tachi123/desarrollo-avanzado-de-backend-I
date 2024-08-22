//Ejemplo con setInterval

let contador = 
    () => {
        let counter=1;
        console.log("Realizando operación");
        let timer = setInterval(
                ()=>{
                console.log(counter++);
                if(counter>5){
                    clearInterval(timer); //Se apaga después de contar 5
                }
            }
            ,1000)
	/**
	 * Al ser un intervalo, el console.log(counter++) se ejecutará
	 * cada 1000 milisegundos (1 segundo)
	 */
}
console.log("¡Iniciando tarea!");
contador();
console.log("¡Tarea finalizada!");


/**
 * Orden de salida:
 * ¡Iniciando tarea!
 * Realizando operación
 * ¡Tarea finalizada!
 * 1 (aquí pasa 1 segundo)
 * 2 (aquí pasa 1 segundo)
 * 3 (aquí pasa 1 segundo)
 * 4 (aquí pasa 1 segundo)
 * 5
 */