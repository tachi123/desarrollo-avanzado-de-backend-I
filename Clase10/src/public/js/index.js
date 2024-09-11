const socket = io();

/**
 *  io hace referencia a "socket.io", se le llama así por convención.
 *  La línea 1 permite instanciar el socket y guardarlo en la constante "socket"
 *  Dicho socket es el que utilizaremos para poder comunicarnos con el socket del servidor.
 *  (Recuerda que, en este punto somos "clientes", porque represamos una vista)
 */

socket.emit('message', '¡Hola, me estoy comunicando desde un websocket');

socket.on('evento_para_socket_individual', data => {
    console.log(data);
});

socket.on('evento_para_todos_menos_el_socket_actual', data => {
    console.log(data);
});

socket.on('evento_para_todos', data => {
    console.log(data);
});



const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessage');
const messageContainer = document.getElementById('messageContainer');

sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('newMessage', message);
    messageInput.value = '';
});


socket.on('loadMessages', (messages) => {
    messages.forEach((message) => {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${message.socketid}: ${message.message}`;
        messageContainer.appendChild(messageElement);
    });
});
