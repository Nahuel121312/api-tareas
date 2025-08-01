const {
    Tarea,
    leerTareas,
    guardarTareas,
    eliminarTarea,
    actualizar,
} = require("../models/task.model")

//Obtener todas las tareas
const obtenerTareas = (req, res) => {
    const tareas = leerTareas()
    res.status(200).json(tareas)
}

//Crear nueva tarea
const crearTarea = (req, res) => {
    const { titulo, descripcion} = req.body

    const nuevaTarea = new Tarea(titulo, descripcion)
    const tareas = leerTareas()

    tareas.push(nuevaTarea)
    guardarTareas(tareas)

    res.status(201).json(nuevaTarea)
}

//Eliminar tarea por id
const eliminarTareaPorId = (req, res) => {
    const { id } = req.params
    const eliminado = eliminarTarea(id)

    if(!eliminado){
        return res.status(404).json({error:"Tarea no encontrada"})
    }

    res.json({mensaje: "Tarea eliminada correctamente"})
}

//Actualizar tarea por ID
const actualizarTareaPorId = (req, res) => {
    const {id} = req.params
    const nuevosDatos = req.body
    console.log("ID:"+id)

    const actualizado = actualizar(id, nuevosDatos)

    if(!actualizado){
        return res.status(404).json({error: "Tarea no encontrada"})
    }
    res.json(actualizado)
}

module.exports = {
    obtenerTareas,
    crearTarea,
    eliminarTareaPorId,
    actualizarTareaPorId,
}