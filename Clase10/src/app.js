import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

//Importamos los routers
import viewsRouter from './routes/views.router.js';

//Importamos el constructor de un servidor de scokets
import {Server} from 'socket.io';

const app = express();
const httpServer = app.listen(8080, ()=> {
    console.log('Listening on PORT 8080'); //Servidor HTTP
});

//Creamos un servidor de sockets que vive dentro de nuestro servidor HTTP
const socketServer = new Server(httpServer);

//Configurar el motor de plantillas Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views',__dirname + '/views');
app.set('view engine','handlebars');

// Cargamos la carpeta 'public' como nuestra carpeta de archivos estáticos
app.use(express.static(__dirname + '/public'));

//Usamos el enrutador para las vistas
app.use('/',viewsRouter);


const messages = [];
// Escuchamos conexiones entrantes
socketServer.on( 'connection', (socket) => {
    console.log("Nuevo cliente conectado");

    socket.on("message", data => {
        console.log(data)
    });

    socket.emit('evento_para_socket_individual','Este mensaje solo lo debe recibir el socket');

    socket.broadcast.emit('evento_para_todos_menos_el_socket_actual', 'Este evento lo verán todos los sockets conectados, menos el socket actual desde el que se envió el mensaje');  

    socketServer.emit('evento_para_todos', 'Este mensaje lo reciben todos los sockets conectados');

    // Enviar los mensajes existentes al nuevo cliente

    socket.emit('loadMessages', messages);

    socket.on('newMessage', (message) => {
        const newMessage = { socketid: socket.id, message };
        messages.push(newMessage);
        socketServer.emit('newMessage', newMessage);
    });
});