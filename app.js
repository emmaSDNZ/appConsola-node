const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa, 
        leerInput,
        listadoTrareasBorrar,
        confirmar
      } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


require('colors')


console.clear();

const main = async () => {

    console.log("hola mundo".green);

    let opt = ''
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB){
      //cargar tareas
      tareas.cargarTareasArray( tareasDB )
    }

    do {

      opt=   await inquirerMenu()

      switch (opt) {
        case '1':
            //crear opcion
            const dsc = await leerInput('Descipcion: ');
            tareas.crearTarea( dsc );
                
            break;

        case '2':
            //listado completo
            tareas.listadoCompleto()
           
            break;
        
        case '3':
            //listado tareas completas
            tareas.listarPendientesCompletados( true )
             
            break;
      
        case '4':
            //listado tareas pendientes
            tareas.listarPendientesCompletados(false)
             
            break;
        case '6':
          const id =  await listadoTrareasBorrar( tareas.listasdoArr )
          
          if( id !== '0'){

          const  ok = await confirmar('¿Estas seguro de borrar esta tarea?')
          if ( ok ) {
            tareas.borrarTarea( id)
            console.log('La tarea de borro de forma correcta');
          } 
          
          }
         
          break;

      }

      guardarDB( tareas.listasdoArr );
      await pausa();
      
    } while (opt !== '0');
    
}


main()