let contador = 0;

const interval = 
    setInterval(
        //unaFunción
        function(){
            console.log("Contador: ",contador++);
            if(contador >= 5){
                clearInterval(interval);
                console.log("Se ha detenido el intervalo");
            }
        }
        , 1000 //se ejecuta cada 1000ms es decir 1 segundo
    );
