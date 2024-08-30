/**
 * Estamos desarrollando una aplicación de gestión de tareas.
 * Esta API tiene que servir como backend para una aplicación frontend que permita a los usuarios
 * crear, leer, actualizar y eliminar tareas.
 * 
 * Crear un API REST usando Express.js
 * 
 * Gestionar tareas. Las tareas deben tener un título, una descripción y una fecha de vencimiento.
 */

/**
 * Validación de fechas: se agregó función isValidDate
 * Códigos de estado HTTP:
 *  400 Bad Request : cuando los datos proporcionados no son válidos
 *  404 Not Found: Cuando no encontramos la tarea
 *  201 Created: cuando se crea una nueva tarea
 *  204 No content: se usa cuando eliminamos una tarea -> mejoramos los conflictos a la hora de gestionar tareas
 * 
 * UUIDs: para generar IDs únicos para las tareas
 */

import express from 'express';
import {v4 as uuidv4 } from 'uuid';

const app = express();
const server = app.listen(8080, ()=> console.log("Listening on PORT 8080"));

app.use(express.json()) //Como indica el método, ahora el servidor podrá recibir jsons al momento de la petición
app.use(express.urlencoded({extended:true})) //Permite que se pueda enviar información también desde la URL

let tareas = [];

//Función para validar fechas
function isValidDate(dateString){
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
}


//GET /tareas : Devolver un arreglo con todas las tareas
app.get( '/tareas' ,  (request, response) => {
    response.json(tareas)
})

//GET /tareas/:id : Devolver una tarea con ID especificado
app.get( '/tareas/:id' , (req, res) => {
    const tareaIdBuscada = req.params.id;
    const tarea = tareas.find( tarea => tarea.id === tareaIdBuscada)
    //Validamos que se haya encontrado algo
    if(!tarea){
        return res.status(404).json({error: 'Tarea no encontrada'});
    }
    res.json(tarea);
})

//POST /tareas : crear una nueva tarea. Donde el cuerpo de solicitud o petición tiene que tener los campos título, descripción y fechaVencimiento
app.post( '/tareas' , (request, response) => {
    const {titulo, descripcion, fechaVencimiento} = request.body;

    //Validación de datos
    if(!titulo || !descripcion || !fechaVencimiento || !isValidDate(fechaVencimiento)){
        return response.status(400).json({ error : 'Datos inválidos'});
    }

    //Validar si la tarea ya existe
    //CREAR ALGORITMO

    const nuevaTarea = {
        id: uuidv4(),
        titulo,
        descripcion,
        fechaVencimiento
    };

    tareas.push(nuevaTarea);
    response.status(201).json(nuevaTarea); //201 - Created
})

//PUT /tareas/:id : actualizar una tarea existente. Debe tener en su petición un cuerpo que contenga los campos titulo, descripcion y fechaVencimiento
app.put( '/tareas/:id' , (req, res) => {
    const tareaIdBuscada = req.params.id;
    const {titulo, descripcion, fechaVencimiento} = req.body;
    const tareaIndex = tareas.findIndex(tarea => tarea.id === tareaIdBuscada)

    //Si no encuentra una tarea con el tareaIdBuscada retorna -1
    if (tareaIndex === -1){
        return res.status(404).json({error: 'Tarea no encontrada'})
    }

    //Validación de datos
    if(fechaVencimiento && !isValidDate(fechaVencimiento)){
        return res.status(400).json({ error : 'Fecha de vencimiento inválida'});
    }

    //Validar campos que queremos agregar
    //Crear algoritmo

    tareas[tareaIndex] = {
        ...tareas[tareaIndex],
        titulo,
        descripcion,
        fechaVencimiento
    };

    res.json(tareas[tareaIndex]);
})

//DELETE /tareas/:id : Eliminar una tarea
app.delete( '/tareas/:id' , (req, res) => {
    const tareaIdAEliminar = req.params.id;
    const tareaIndex = tareas.findIndex(tarea => tarea.id === tareaIdAEliminar);

    if(tareaIndex === -1){
        return res.status(404).json({error: 'Tarea no encontrada'});
    }

    tareas.splice(tareaIndex, 1);
    res.status(204).json({mensaje: 'Tarea eliminada'})
})