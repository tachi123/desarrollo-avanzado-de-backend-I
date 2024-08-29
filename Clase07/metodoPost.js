import express from 'express';

const app = express();
const server = app.listen(8080, ()=> console.log("Listening on PORT 8080"));
//Primero tenemos que configurar nuestro servidor para que pueda recibir información del cliente

app.use(express.json()) //Como indica el método, ahora el servidor podrá recibir jsons al momento de la petición
app.use(express.urlencoded({encoded:true})) //Permite que se pueda enviar información también desde la URL

let users = []  //Aquí almacenaremos los users que vayamos creando. Los crearemos a partir del método POST

//Ahora, en lugar de llamar app.get, llamaremos app.post, indicando que queremos CREAR un recurso (user)
app.post('/api/user',(req,res) => {
    let user = req.body; // Recordemos que req.body es el JSON que enviará el usuario al momento de hacer la petición
    //Podemos validar que se cumplan ciertos campos antes de agregarlo
    if(!user.first_name||!user.last_name){//Preguntamos si faltó el nombre o el apellido
        /**
         * Ya que fue un error donde el cliente se equivocó al enviar información incompleta, el status que
         * devolveremos será un status 400. éste lo coloraremos antes del .send como se indica más abajo.
        */
        return res.status(400).send({status: "error", error:"Incomplete values"})  
    }
    //En caso de que no haya entrado al if, significa que el cliente sí envió los campos completos
    //Procedemos a agregarlo al arreglo de users
    users.push(user);
    res.send({status:"success",message:"User created"}) //El status 200 viene implícito cuando no lo indicamos.

})

app.put('/api/user/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    // Encontrar el usuario a actualizar
    /*const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).send({ status: "error", error: "User not found" });
    }*/
    // Opción 1: Actualizar solo los campos especificados en el request
    // users[userIndex] = { ...users[userIndex], ...updatedUser };
    // Opción 2: Reemplazar el usuario completo
    users[userId] = updatedUser;
    res.send({ status: "success", message: "User updated" });
});

app.delete('/api/user/:id',(req,res)=>{
    let name = req.params.id;
    let currentLength = users.length;
    users = users.filter(user=>user.first_name!=name);
    if(users.length===currentLength){//Si la longitud del arreglo es igual, entonces no se eliminó nada
        return res.status(404).send({status:"error",error:"User not found"})
    }
    res.send({status:"success",message:"User deleted"})
})

app.get('/api/users/:id', (req, res) => { 
    const userId = req.params.id; 
    const user = users.find(user => user.id === userId); 
    if (!user) { 
        return res.status(404).send({ status: "error", error: "User not found" });
     } 
     res.send(user);
});

