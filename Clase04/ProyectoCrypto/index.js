const UsersManager = require('./usersManager');

//Crear usuarios
UsersManager.crearUsuario('Nahuel','Ramirez','nahuelramirez','1234');

//Mostrar usuarios
UsersManager.mostrarUsuarios();

//Validar contraseña
UsersManager.validarUsuario('nahuelramirez','1234');