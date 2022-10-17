const Tarea = require('./tarea')
require('colors')

class Tareas {

    __listado= {}
    
    get listasdoArr(){

        const listado = [];

        Object.keys(this.__listado).forEach( key =>{
            listado.push( this.__listado[key] );
        })

        return listado;
    }

    constructor(){
        this.__listado = {};
    }

    cargarTareasArray ( tareas = [] ){
       
        tareas.forEach( tarea => {
            this.__listado[tarea.id] = tarea
        })
    }

    crearTarea( dsc = '' ){

        const tarea = new Tarea(dsc);
        this.__listado[ tarea.id ] = tarea;
    }

    listadoCompleto (){

        console.log();
        this.listasdoArr.forEach( (tarea, i)=>{
            const idx = `${i + 1}.green`;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) 
                                ? 'Completodo'.green
                                : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);

        })
    }

    listarPendientesCompletados( completadas = true ) {

        console.log();
        let contador = 0;
        this.listasdoArr.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        }); 
}


}


module.exports= Tareas;