import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

//Importamos los routers
import viewsRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';

const app = express();

//Inicializamos el motor indicando con app.engine('qué motor utilizaremos', el motor instanciado)
app.engine('handlebars', handlebars.engine());

/**
 * con app.set('views',ruta) Indicamos en qué parte dle proyecto van a estar las vistas
 * Recuerda utilizar rutas absolutas para indicar y evitar asuntos de ruteo relativo
 */
app.set('views', __dirname + '/views');

/**
 * Finalmente, con app.set('view engine','handlebars') indicamos que, el motor que ya
 * inicializamos arriba, es el que queremos utilizar. Es importante para saber que
 * cuando digamos al servidor que renderice, sepa que tiene que hacerlo con el motor de
 * handlebars
 */
app.set('view engine','handlebars');

//Setear de manera estática nuestra carpeta public
app.use(express.static(__dirname+'/public'));

app.use('/', viewsRouter);
app.use('/user', userRouter);

app.get('/register', (req,res) => {
    res.render('register');
});

const server = app.listen(8080, () => {
    console.log("Listening en PORT 8080");
})