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

        agregarTarea(titulo, descripcion)

        setTitulo("")
        setDescripcion("")
        navigate("/")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escribe una tarea" 
            />

            <input 
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripcion"
            />

            <button type="submit">Agregar</button>
        </form>
    )
}

export default TaskForm;