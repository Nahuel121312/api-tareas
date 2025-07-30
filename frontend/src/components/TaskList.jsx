import TaskItem  from "./TaskItem";

function TaskList({tareas}){
    if(!tareas || tareas.length === 0){
        return <p>No hay tareas aun.</p>
    }

    return (
        <ul>
            {tareas.map((tarea) =>(
                <TaskItem key= {tarea.id} tarea = {tarea}/>
            ))}
        </ul>
    )
}
export default TaskList;