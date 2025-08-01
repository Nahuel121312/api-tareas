import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function TaskForm({agregarTarea}){
    
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

        //Validacion de titulo
        if(titulo.trim() ==="")return;
        const nuevaTarea = {
            titulo,
            descripcion,
            completed: false,
        }

        agregarTarea(nuevaTarea)

        setTitulo("")
        setDescripcion("")
        navigate("/")
    }


    return (
        <form className="max-w-md mx-auto mt-8 p-6 bg-gray-800 text-white rounded shadow flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escribe una tarea" 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-blue-400"
            />

            <input 
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripcion"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-blue-400"
            />

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
             type="submit">Agregar</button>
        </form>
    )
}

export default TaskForm;