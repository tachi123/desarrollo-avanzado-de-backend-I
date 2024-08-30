import express from 'express';

const app = express();
const server = app.listen(8080, ()=> console.log("Listening on PORT 8080"));

app.use(express.json()) //Como indica el método, ahora el servidor podrá recibir jsons al momento de la petición
app.use(express.urlencoded({extended:true})) //Permite que se pueda enviar información también desde la URL

let frase = 'Frase inicial con muchas palabras';

//GET /api/frase
app.get('/api/frase', (req, res) =>{
    res.json({frase});
})

//GET /api/palabras/:pos
app.get('/api/palabras/:pos', (req, res)=>  {
    const pos = parseInt(req.params.pos);
    const palabras = frase.split(' '); // [ frase , inicial, con , muchas, palabras]
    const palabraBuscada = palabras[pos - 1 ]; //Resto uno, porque en un array las posiciones arrancan en 0
    if(!palabraBuscada){
        return res.status(404).json({error:'Palabra no encontrada'});
    }
    res.json({buscada: palabraBuscada});
})

//POST /api/palabras
app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body;
    frase += ` ${palabra}`;
    const pos = frase.split(' ').length;
    res.json({ agregada: palabra, pos });
});

// PUT /api/palabras/:pos
app.put('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos);
    const { palabra } = req.body;
    const palabras = frase.split(' ');
    const palabraAnterior = palabras[pos - 1];
    palabras[pos - 1] = palabra;
    frase = palabras.join(' ');
    res.json({ actualizada: palabra, anterior: palabraAnterior });
  });

// DELETE /api/palabras/:pos
app.delete('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos);
    const palabras = frase.split(' ');
    palabras.splice(pos - 1, 1);
    frase = palabras.join(' ');
    res.json({ mensaje: 'Palabra eliminada' });
  });