import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function TaskItem({tareas , eliminarTarea, actualizarTarea}){
    const [error, setError] = useState("")
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()

    //Buscar tarea por id
    const tarea = tareas.find(t => t.id === id)

    useEffect(() =>{
        if(tarea) {
            setTitulo(tarea.titulo)
            setDescripcion(tarea.descripcion)
        }
    }, [tarea])

    if(!tarea) return <p>Tarea no encontrada</p>

    //Actualizar tarea y volver a la lista con navigate("/")
    const handleActualizar = () =>{
        if(titulo.trim()===""){
            setError("El titulo no puede estar vacio")
            return;
        }
        setError("")
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
       <div className="bg-gray-800 text-white max-w-md mx-auto mt-8 p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Editar Tarea</h2>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <input 
            value={titulo} 
            onChange={e => setTitulo(e.target.value)} 
            placeholder="Titulo"
            className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            /> 

            <textarea 
            value={descripcion} 
            onChange={e => setDescripcion(e.target.value)} 
            placeholder="Descripcion"
            className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-between">
                <button 
                onClick={handleActualizar}
                className="bg-blue-500 hover:bg-blue-600 text-whote px-4 py-2 rounded"
                >
                Actualizar
                </button>

                <button 
                onClick={handleEliminar}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                Eliminar
                </button>
            </div>
       </div>
    )
}

export default TaskItem;