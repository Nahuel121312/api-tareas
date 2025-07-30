import React, { useState } from "react";

function TaskForm({agregarTarea}){
    
    const [titulo, setTitulo] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Tarea agregada", titulo)
        if(titulo.trim() ==="")return;

        agregarTarea(titulo)
        setTitulo("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escribe una tarea" />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default TaskForm;