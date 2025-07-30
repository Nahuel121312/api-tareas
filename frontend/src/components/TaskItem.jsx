function TaskItem({tarea}){
    let descripcionContenido = null;
    if(tarea.descripcion){
        descripcionContenido = <p>{tarea.descripcion}</p>
    }

    let estadoTexto;
    if(tarea.completed){
        estadoTexto = "Completada";
    }else {
        estadoTexto = "Pendiente"
    }

    return (
        <li>
            <strong>{tarea.titulo}</strong>
            {descripcionContenido}
            <p>Estado: {estadoTexto}</p>
        </li>
    )
}

export default TaskItem;