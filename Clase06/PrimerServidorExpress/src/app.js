import express from 'express';

/**
 * Express es el módulo ya instalado, sin embargo, para poder tener andando nuestra "app",
 * necesitamos inicializarlo cno la siguiente línea:
 */
const app = express(); /** a partir de aquí la variable app contendrá
todas las funcionalidades de express */


/**
 * app.get apertura un "endpoint", el cual indica al protocolo HTTP que, en la ruta /saludo
 * espera una petición de tipo GET. Si se llama a otra ruta u otro método, no lo reconocerá.
 */

app.get('/saludo', (req, res) => {//req = request (petición) ; res = response (respuesta)
    res.send("¡Hola a todos, pero ahora desde express!")
    //res.send sirve para "Responder" a la petición con el contenido de dentro.

})

/**
 * app.-get configura el endpoint, sin embargo, el servidor aún no se ha levantado para escuchar
 * en algún puerto. Para esto, vamos a recurrir a app.listen
 */

app.listen(8080, ()=> console.log("¡Servidor arriba en el puerto 8080!"))
//El segundo argumento es un callback que muestra un console.log indicando que el servidor esta arriba.