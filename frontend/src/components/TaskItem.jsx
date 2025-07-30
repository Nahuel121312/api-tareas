function TaskItem({tarea, eliminarTarea, actualizarTarea}){
    let descripcionContenido = null;
    if(tarea.descripcion){
        descripcionContenido = <p>{tarea.descripcion}</p>
    }

    let estadoTexto = tarea.completed ? "Completada" : "Pendiente"
    console.log("ID en taskItem: "+ tarea.id)

    const handleCheckboxChange = () =>{
        const tareaActualizada = { ...tarea, completed: !tarea.completed}
        actualizarTarea(tarea.id, tareaActualizada)
    }

    return (
        <li>
            <input
            type="checkbox"
            checked={Boolean(tarea.completed)}
            onChange={handleCheckboxChange}
            />
            <strong>{tarea.titulo}</strong>
            {descripcionContenido}
            <p>Estado: {estadoTexto}</p>
            <button onClick={()=> eliminarTarea(tarea.id)}>Eliminar</button>
        </li>
    )
}

export default TaskItem;