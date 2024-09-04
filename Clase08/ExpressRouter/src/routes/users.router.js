import { Router } from 'express';
import { uploader } from '../utils.js'; //importamos el uploader previamente configurado

const router = Router();

//Array para almacenar
let users = [];

// ES DEL TIPO NIVEL DE ROUTER
router.use((req, res, next) => {
    console.log(`LOG DEL ROUTER USERS: ${req.method} ${req.path} - ${new Date()}`);
    next();
})

//Obtener todos los recursos (en este caso users)
router.get('/', (req, res) => {
    res.json(users);
});

//Crear nuevo usuario
router.post('/', uploader.single('file') ,(req, res) => {
    if(!req.file){ //Si no existe req.file, significa que hubo un error al subir el archivo
        //queda en nosotros decidir si se puede continuar o no
        return res.status(400).send({status:"error", error: "No se pudo guardar la imagen"})
    }
    console.log(req.file); //Revisar que campos vienen por parte de multer
    const newUser = req.body;
    newUser.thumbnail = req.file.path; //agregar al usuario la ruta de su respectiva imagen
    users.push(newUser);
    res.status(201).json(newUser);

} )



export default router;
