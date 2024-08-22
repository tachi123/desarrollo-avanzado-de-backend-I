//Ejemplo de operación síncrona
console.log("¡Iniciando tarea!");
console.log("Realizando operación");
for(let contador = 1; contador <= 5;contador++){
	console.log(contador);
}
console.log("¡Tarea finalizada!");


//Orden de salida:
/**
 * ¡Iniciando tarea!
 * Realizando operación
 * 1
 * 2
 * 3
 * 4
 * 5
 * ¡Tarea finalizada!
 */


 /**
 * Nuevamente, todo parece normal, la tarea finaliza hasta
 * que el ciclo haya terminado de contar del 1 al 5
 * ¿Cómo funcionará asíncrono con intervalos?
 */