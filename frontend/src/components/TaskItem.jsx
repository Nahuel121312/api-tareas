import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function TaskItem({tareas , eliminarTarea, actualizarTarea}){

    const { id } = useParams()

    const navigate = useNavigate()

    //Buscar tarea por id
    const tarea = tareas.find(t => t.id === id)

    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    useEffect(() =>{
        if(tarea) {
            setTitulo(tarea.titulo)
            setDescripcion(tarea.descripcion)
        }
    }, [tarea])

    if(!tarea) return <p>Tarea no encontrada</p>

    //Actualizar tarea y volver a la lista con navigate("/")
    const handleActualizar = () =>{
        const tareaActualizada = { ...tarea, titulo, descripcion }
        actualizarTarea(tarea.id, tareaActualizada)
        navigate("/")
    }

    //Eliminar tarea y volver a la lista con navigate("/")
    const handleEliminar = () => {
        eliminarTarea(tarea.id)
        navigate("/")
    }

    return (
       <div>
            <h2>Editar Tarea</h2>

            <input 
            value={titulo} 
            onChange={e => setTitulo(e.target.value)} 
            placeholder="Titulo"
            />

            <textarea 
            value={descripcion} 
            onChange={e => setDescripcion(e.target.value)} 
            placeholder="Descripcion"
            />

            <button onClick={handleActualizar}>Actualizar</button>

            <button onClick={handleEliminar}>Eliminar</button>
       </div>
    )
}

export default TaskItem;