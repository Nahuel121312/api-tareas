const fs = require("fs")
const path = require("path")
const archivoTareas = path.join(__dirname, "../data/task.json")
const {v4: uuidv4} = require("uuid")

//Clase tarea
class Tarea {
    constructor(titulo, descripcion){
        this.id = uuidv4()              //ID unico tipo string (UUID v4)
        this.titulo = titulo            //Titulo de la tarea
        this.descripcion = descripcion  //Descripcion de la tarea
        this.completed = false          //Estado: false por defecto
        this.date = new Date().toISOString()     //Fecha de creacion
    }
}

//Leer tareas
function leerTareas(){
    try{
        const data = fs.readFileSync(archivoTareas, "utf8")
        return JSON.parse(data)
    }catch(error){
        console.error("Error leyendo tareas: "+ error)
        return[]
    }
}

//Function guardarTareas
function guardarTareas(tareas){
    try{
        fs.writeFileSync(archivoTareas, JSON.stringify(tareas, null, 2))
        console.log("Archivo json guardado con tareas", tareas.length)
    }catch (error){
        console.error("Error guardando tareas: "+ error)
    }
}

//Function eliminar tarea por id
function eliminarTarea(id){
    const tareas = leerTareas()
    const index = tareas.findIndex(t => t.id === id)
    if(index === -1) return false

    tareas.splice(index, 1)
    guardarTareas(tareas)
    return true;
}

//Function actualizar una tarea
function actualizar(id, nuevosDatos){
    const tareas = leerTareas()
    const index = tareas.findIndex(t => t.id === id)

    if(index === -1){
        return false
    }

    if(nuevosDatos.titulo !== undefined ){
        tareas[index].titulo = nuevosDatos.titulo
    }
    if(nuevosDatos.descripcion !== undefined){
        tareas[index].descripcion = nuevosDatos.descripcion
    }
    if(nuevosDatos !== undefined){
        tareas[index].completed = nuevosDatos.completed
    }

    guardarTareas(tareas)
    return tareas[index];
}

module.exports = {
    leerTareas,
    guardarTareas,
    eliminarTarea,
    actualizar,
    Tarea,

}

