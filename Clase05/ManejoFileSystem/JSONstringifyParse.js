//Creamos un objeto
const myObject = {name: "Nahuel", age: 30}
//Lo transformamos a un String
const jsonString = JSON.stringify(myObject);
console.log(jsonString);

//Lo volvemos a transformar a un objeto
const myObjectParseado = JSON.parse(jsonString);
console.log(myObjectParseado);

