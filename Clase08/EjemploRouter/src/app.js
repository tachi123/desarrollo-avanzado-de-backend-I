import express from 'express';
import indexRouter from './routes/index.router';

const app = express();
//Inicializar el servidor
app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando");
})

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Implementamos router
app.use('/', indexRouter);