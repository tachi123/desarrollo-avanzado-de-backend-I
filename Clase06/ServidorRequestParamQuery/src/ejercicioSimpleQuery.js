import express from 'express';

const app = express();
const productos = [
    {id: "1", nombre: "Martillo"},
    {id: "2", nombre: "Pala"}
]

app.get('/productos', (req, res) => {
    const idProducto = req.query.idProducto; 
    let producto = productos.find(u => u.id === idProducto);
    //Si no encuentra al usuario, debe finalizar la función devolviendo un error
    if(!producto) return res.send({error:"Producto no encontrado"})
    //En caso de que no haya finalizado la función, significa que el usuario sí se encontró.
    res.send({producto})
})


app.listen(8080, () => console.log("Listo para probar caso práctico"))