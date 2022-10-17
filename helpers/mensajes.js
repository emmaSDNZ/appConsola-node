require('colors');

const mostrarMenu = async()=>{
    return new Promise( resolve =>{

        console.clear();
        console.log("============================".green);
        console.log("   Seleccione una Opcion   ".green);
        console.log("============================\n".green);

        console.log(`${'1'.green}. Creat Tarea`);
        console.log(`${'2'.green}. Listar Tarea`);
        console.log(`${'3'.green}. Listar Tarea Completas`);
        console.log(`${'4'.green}. Listar Tarea Pendientes`);
        console.log(`${'5'.green}. Completas Tarea(s)`);
        console.log(`${'6'.green}. Borrar Tareas`);
        console.log(`${'0'.green}. Salir `);

        //creacion de interfaz para que el user pueda interactuar
        const readline = require('readline').createInterface({
        
            //lo que el usuario ingresa
            input: process.stdin,
            //lo que se muestra en la consola
            output: process.stdout
        });

        //muestra info al user
        readline.question('Seleccione una opcion: ', (opt)=>{
        
            //cerramos para que no se quede esperando info todo el tiempo
            readline.close();
            resolve(opt);
        })
    })
   
}

//funcion que me pausa la consola
const pausa = ()=>{

    return new Promise((resolve,) =>{

        const readline = require('readline').createInterface({

            //lo que el usuario ingresa
            input: process.stdin,
            //lo que se muestra en la consola
            output: process.stdout
        });

        //muestra info al user
        readline.question(`\nPresion ${'ENTER'.blue} para continuar\n`, (opt)=>{
        
            //cerramos para que no se quede esperando info todo el tiempo
            readline.close();

            resolve();
        })

        
    })
    
}



module.exports ={
    mostrarMenu,
    pausa,
}