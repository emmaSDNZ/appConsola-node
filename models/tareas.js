const Tarea = require('./tarea')
require('colors')

class Tareas {

    __listado= {
        'abc': 123
    }
    
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
    borrarTarea( id = '' ) {

        if ( this.__listado[id] ) {
            delete this.__listado[id];
        }

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
            const idx = `${i + 1}`.green;
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

    toggleCompletadas ( ids = []){

        ids.forEach( id => {

            const tarea = this.__listado[id];
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.listasdoArr.forEach(tarea =>  {

            if( ids.includes(tarea.id)){
               this.__listado[tarea.id].completadoEn = null
                
            }
        }) 
    
    }


}


module.exports= Tareas;