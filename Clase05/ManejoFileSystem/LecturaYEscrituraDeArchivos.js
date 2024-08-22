const fs = require('fs');

async function procesarPackageJson(){
    try{
        // 1. Leer el archivo package.json
        const packageString = await fs.promises.readFile('./package.json','utf-8');
        // 2. Convertir el contenido del archivo package.json a un objeto JSON
        const packageObj = JSON.parse(packageString);
        // 3. Obtener el tamaño del archivo package.json
        const size = (await fs.promises.stat('./package.json')).size;
        // 4. Crear el objeto info
        const info = {
            packageString,
            packageObj,
            size,
        };
        // 5. Mostrar el objeto info
        console.log("Objeto info: ", info);
        // 6. Guardar el objeto info en un archivo 'info.json'
        const infoJson = JSON.stringify(info, null , 2); //Formato con identación
        await fs.promises.writeFile('./infoConIdentacion.json', infoJson);
        await fs.promises.writeFile('./info.json', JSON.stringify(info));
    }catch(error){
        console.error("Error durante el procesamiento: ",error);
    }
}

procesarPackageJson();