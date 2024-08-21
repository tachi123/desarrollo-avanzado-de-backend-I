const crypto = require('crypto');

class UsersManager{
    static usuarios = []; //Atributo para almacenar usuarios

    static crearUsuario(nombre,apellido,usuario,contrasena){
        //Encriptar la contraseña
        const hash = crypto.createHmac('sha256','clave_secreta').update(contrasena).digest('hex');
        //recién acabamos de hashear la contraseña
        //Agregar el usuario
        UsersManager.usuarios.push({nombre, apellido, usuario, contraseña: hash});
        console.log('Usuario creado exitosamente');
    }

    static mostrarUsuarios() {
        console.log('Lista de Usuarios:');
        UsersManager.usuarios.forEach(usuario => {
          console.log(`- Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}, Usuario: ${usuario.usuario}`);
        });
    }

    static validarUsuario(usuario, contraseniaIngresada){
        const usuarioEncontrado = UsersManager.usuarios.find( u => u.usuario === usuario)
        if(!usuarioEncontrado){
            console.error('Usuario no encontrado');
            return;
        }
        const hashGuardado = usuarioEncontrado.contraseña;
        const hashIngresado = crypto.createHmac('sha256','clave_secreta').update(contraseniaIngresada).digest('hex');
        if(hashGuardado === hashIngresado){
            console.log('Login exitoso');
        }else{
            console.error('Contraseña incorrecta.')
        }
   
    }
    
}

module.exports = UsersManager;