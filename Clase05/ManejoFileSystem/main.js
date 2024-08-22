import UsersManager from "./UsersManager";

const usersManager = new UsersManager();

async function main(){
    try{
        //Crear nuevo usuario
        await usersManager.crearUsuario({
            nombre:'Nahuel',
            apellido: 'Ramirez',
            edad: 33,
            curso: 'Programación Backend I'
        });

        //Consultar usuarios
        const usuarios = await usersManager.leerUsuarios();
        console.log('Usuarios:',usuarios);
    }catch(error){
        console.error('Error en la aplicacion:',error);
    }
}

main();