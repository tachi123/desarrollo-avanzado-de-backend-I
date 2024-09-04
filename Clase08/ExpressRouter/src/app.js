import express from 'express';

import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

//Importamos los routers
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

const app = express();

//Inicializar el servidor
app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando");
})

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Middleware para registrar todas las peticiones
// ES DEL TIPO NIVEL DE APLICACIÓN
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date()}`);
    next();
})

//Implementar los routers que creamos
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

//Implementar archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.join(__dirname,'public');

console.log(publicPath);
app.use('/static', express.static(publicPath))



