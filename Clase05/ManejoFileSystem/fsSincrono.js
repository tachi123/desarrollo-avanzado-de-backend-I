const fs = require('fs');

//Como comentamos en las diapositivas, fs nos permitirá acceder a las operaciones para archivos
fs.writeFileSync('./ejemplo.txt',"¡Hola, Coders, estoy en un archivo")
/**
 * Primera operación: para escribir un archivo, el primer argumento/parámetro es la ruta y
 * nombre del archivo sobre el que queremos trabajar. El segundo argumento es el contenido
 * ¡Súper sencillo!
 */
 if(fs.existsSync('./ejemplo.txt')){//existsSync devuelve true si el archivo sí existe, y false si el archivo no existe
	let contenido = fs.readFileSync('./ejemplo.txt','utf-8')
	/**
	* readFileSync lee el contenido del archivo, es importante que en el segundo parámetro coloquemos el tipo de
	* codificación que utilizaremos para leerlo. En este curso sólo abarcaremos utf-8
	*/
	console.log(contenido) //El resultado será lo que escribimos arriba en la línea 4: "¡Hola Coders, estoy en un archivo!"
	fs.appendFileSync('./ejemplo.txt','Más contenido')
	/**
	 * appendFileSync buscará primero la ruta del archivo, si no encuentra ningún archivo, lo creará, en caso de sí
	 * encontrarlo, en lugar de sobreescribir todo el archivo, sólo colocará el contenido al final.
	 */
	contenido = fs.readFileSync('./ejemplo.txt','utf-8')
	//Volvemos a leer el contenido del archivo
	console.log(contenido);
	//Esta vez el contenido será: "¡Hola, Coders, estoy en un archivo! Más contenido" esto gracias al appendFileSync
	fs.unlinkSync('./ejemplo.txt');
	//Por último, esta línea de código eliminará el archivo, independientemente de todo el conteido que éste tenga.
}