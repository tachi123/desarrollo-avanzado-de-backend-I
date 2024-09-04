import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('Hola desde router index');
})

//Otro endpoint
router.get('/about', (req, res) =>{
    res.send('Acerca de');
})

export default router;