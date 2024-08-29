import express from 'express';

const app = express();

app.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;

    //Simulamos una búsqueda en una base de datos
    const user = users.find(user=> user.id === userId);
    if(!user){
        return res.status(404).send('Usuario no encontrado');
    }

    res.json(user);
})


//Crear un nuevo producto
    /api/productos    POST        JSON que contenga el nombre, el precio y otros detalles
//actualizar un producto
    /api/productos/:id  PUT    JSON CON EL NUEVO CONJUNTO DE DATOS
//eliminar un producto
    /api/productos/:id DELETE


//API REST de una tienda línea
//Lista de detalles de productos que tienen en la respuesta enlaces a 
// Productos relacionados, opiniones de otros clientes y/o agregar a carrito compras
{ 
    "id" : 123,
    "nombre" : "Camiseta"
    "precio" : 299
    "links" : [
        {
            "rel" : "self",
            "href" : "/productos/123"
        },
        {
            "rel" : "opiniones",
            "href" : "/opiniones/123"
        },
        {
            "rel" : "carrito",
            "href" : "/agregarProducto?producto=123"
        }


    ]


}