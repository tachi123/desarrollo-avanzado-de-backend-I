import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    //Usaremos un objeto de prueba, que es el que meteremos a la plantilla para sustituir los campos
    let testUser = {
        name: "Nahuel",
        last_name: "Ramirez",
        age: 33
    }
    //res.render es nuestro nuevo método para renderizar plantillas, y se compone así:
    // (nombre de la plantilla, objeto para reemplazar los campos)
    res.render('index',testUser);
})

let food = [
    {name: "Hamburguesa" , price: "100"},
    {name: "Banana" , price: "20"},
    {name: "Soda" , price: "40"},
    {name: "Ensalada" , price: "120"},
    {name: "Pizza" , price: "150"}
]

router.get('/indexfood', (req, res) => {
    //Usaremos un objeto de prueba, que es el que meteremos a la plantilla para sustituir los campos
    let testUser = {
        name: "Nahuel",
        last_name: "Ramirez",
        age: 33,
        role: "user"
    }
    //res.render es nuestro nuevo método para renderizar plantillas, y se compone así:
    // (nombre de la plantilla, objeto para reemplazar los campos)
    res.render('indexfood',{
        user: testUser,
        isAdmin: testUser.role === "admin",
        food,
        style: "index.css"
    });
})

export default router;