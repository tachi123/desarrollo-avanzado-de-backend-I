import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {}); // De momento solo renderizamos la vista, no pasamos objetos
});

export default router;