import express from 'express';

const app = express();
const usuarios = [
    {id: "1", nombre: "Mauricio", apellido: "Espinosa", edad: 25},
    {id: "2", nombre: "Natalia", apellido: "Cardozo", edad: 23},
    {id: "3", nombre: "Roberto", apellido: "Gómez", edad: 30}
]

//Endpoint raiz '/' devolver todos los usuarios
app.get('/', (req, res) => {
    res.send({usuarios});//Se recomienda enormemente mandar lo sdatos en formato objeto en lugar
    // de enviarlos como un array solo, esto permite que, si vamos a 9meter más info en el futuro
    //no tengamos que cambiar el tipo de respuesta de lado del cliente.
})

app.get('/:idUsuario', (req,res) => {
    let idUsuario = req.params.idUsuario; //Obtenemos el id del usuario a trabajar
    /** Procedemos a buscar el usuario que tenga el id pasado por params */
    let usuario = usuarios.find(u => u.id === idUsuario);
    //Si no encuentra al usuario, debe finalizar la función devolviendo un error
    if(!usuario) return res.send({error:"Usuario no encontrado"})
    //En caso de que no haya finalizado la función, significa que el usuario sí se encontró.
    res.send({usuario})
})

app.listen(8080, () => console.log("Listo apra probar caso práctico"))