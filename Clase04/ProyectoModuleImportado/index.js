const moment = require('moment'); //importar moment.js

//Fecha actual
const fechaActual = moment();

//Fecha de nacimiento de Nahuel
const fechaNacimiento = moment('1991-03-26');

if(fechaNacimiento.isValid()){
    //Calcular la diferencia de días
    const diffDias = fechaActual.diff(fechaNacimiento, 'days');
    console.log(`Han pasado ${diffDias} días desde que naciste.`)
}else{
    console.error('La fecha de nacimiento no es válida.')
}

