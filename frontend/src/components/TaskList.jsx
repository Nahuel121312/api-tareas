import TaskItem  from "./TaskItem";
import { Link } from "react-router-dom";

function TaskList({tareas, eliminarTarea, actualizarTarea}){
    if(!tareas || tareas.length === 0){
        return <p>No hay tareas aun.</p>
    }

    return (
        <ul>
            {tareas.map((tarea) =>(
                <li key={tarea.id}>
                    <Link to={`/task/${tarea.id}`}>{tarea.titulo}</Link>
                </li>
            ))}
        </ul>
    )
}
export default TaskList;