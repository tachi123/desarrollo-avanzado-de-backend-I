const express = require('express');

const app = express();
const port = 8080;

//Endpoint para la bienvenida
app.get( '/bienvenida' , (request, response) => {
    response.send(`<h1 style="color: blue">¡Bienvenido a mi aplicación express!</h1>`)
})

//Endpoint para obtener datos de un usuario
app.get('/usuario', (request, response) => {
    const usuario = {
        nombre: 'Nahuel',
        apellido: 'Ramirez',
        edad: 33,
        correo: 'jnramirezlorca@gmail.com'
    }
    response.json(usuario);
})

app.listen( port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})