import { Router } from 'express';

const router = Router();

//Array para almacenar
let pets = [];

//Obtener todos los recursos (en este caso las mascotas)
router.get('/', (req, res) => {
    res.json(pets);
});

//Crear nueva mascota
router.post('/', (req, res) => {
    const newPet = req.body;
    pets.push(newPet);
    res.status(201).json({message: 'Mascota creada exitosamente'});
} )

export default router;

