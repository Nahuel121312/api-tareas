import TaskItem  from "./TaskItem";

function TaskList({tareas, eliminarTarea, actualizarTarea}){
    if(!tareas || tareas.length === 0){
        return <p>No hay tareas aun.</p>
    }

    return (
        <ul>
            {tareas.map((tarea) =>(
                <TaskItem key= {tarea.id} 
                tarea = {tarea} 
                eliminarTarea={eliminarTarea}
                actualizarTarea={actualizarTarea}
                />
            ))}
        </ul>
    )
}
export default TaskList;