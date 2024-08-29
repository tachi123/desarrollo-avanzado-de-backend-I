import express from 'express';

const app = express();
app.use(express.urlencoded({extended:true}))

app.get('/ejemploQueries', (req, res) =>{
    /**
     * Nota algo interesante: Aquí no es necesario adelantarnos al parámetro que tiene que
     * meter el cliente. Con el simple hecho de llamar al endpoint, el cliente puede
     * meter los queris que necesite desde la url con el símbolo ?
     */
    let consultas = req.query;
    /**
     * A diferencia de req.params, aquí no tengo contemplado qué tipo de cosas me pueden pedir
     * aunque sí podemos delimitarlo haciendo un destructuring
     */
    let {nombre,apellido,edad} = req.query;
    /**
     * Así, no importa lo que llegue del query, sólo extraeré el nombre, el apellido y la edad
     * Esto aumenta la seguridad del servidor poqrue evitamos recibir elementos extraños desde
     * la url
     */
    res.send(consultas)
})

app.listen( 8080, () => console.log("Listo para probar queries"))

