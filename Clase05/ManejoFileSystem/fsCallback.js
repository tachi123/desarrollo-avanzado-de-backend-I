const fs = require('fs'); //Volvemos a utilizar fs, sin él, no podremos trabajar con archivos.

fs.writeFile('./ejemploCallback.txt','¡Hola desde Callback',(error) =>{
	/**
	 * Notemos que la operación es similar, el detalle es que ahora estamos metiendo un callback para preguntar si algo
	 * salió mal durante la operación de escritura del archivo.
	 */
	if(error) return console.log('Error al escribir el archivo') //Pregunta si el "error" del callback existe
	fs.readFile('./ejemploCallback.txt','utf-8',(error,resultado)=>{
		/**
		* Los mismos argumentos del readFileSync, sólo que esta vez al final colocamos un callback, donde el primer
		* argumento/parámetro sirve para saber si hubo algún error al leer el archivo, el segundo argumento es el 
		* resultado de esa lectura.
		*/
		if(error) return console.log('Error al leer el archivo') //¡Nota que cada callback es consciente de su error!
		console.log(resultado)//En caso de no haber error, el resultado será: 'Hola desde Callback'
		fs.appendFile('./ejemploCallback.txt','Más contenido',(error)=>{
			/**
			 * Hasta este punto debes estar preocupándote... ¿Acaso estoy armando un callback Hell?
			 * ¡Mucho cuidado cuando trabajas con callbacks y con archivos!
			 */
			if(error) return console.log('Error al actualizar el archivo') //Preguntamos si hubo error en el append.
			fs.readFile('./ejemploCallback.txt','utf-8', (error, resultado) => {
				//Volvemos a leer el archivo, para corroborar el nuevo cambio.
				if(error) return console.log('Error al leer el archivo')
				console.log(resultado) //Si todo salió bien, debe mostrar "¡Hola desde Callback Más contenido"
				fs.unlink('./ejemploCallback.txt', (error) => {
					if(error)return console.log('No se pudo eliminar el archivo');
				});
			})
		})
	})
})

