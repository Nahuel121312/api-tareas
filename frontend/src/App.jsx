import TaskForm from "./components/TaskForm"
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tareas, setTareas] = useState([])

  //Get mostrar tareas
  useEffect(() => {
    fetch("http://localhost:1234/api/tasks")
    .then(res => res.json)
    .then(data => setTareas(data))
    .then(error => console.error("Error al obtener tareas",error))
  }, []);

  //Metodo POST
  const agregarTarea = (titulo) => {
    fetch("http://localhost:1234/api/tasks", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ titulo, descripcion, completada:false})
    })
    .then(res => res.json())
    .then(nuevaTarea => {
      setTareas(prev => [...prev, nuevaTarea])
    })
    .catch(error => console.error("Error al crear tarea", error))
  }

  //Metodo DELETE
  const eliminarTarea = (id) => {
    fetch("http://localhost:1234/api/tasks(${id}", {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        setTareas(prev => prev.filter(t => t.id !== id))
      }else {
        console.error("Error al eliminar tarea")
      }
    })
    .catch(error => console.error("Error: ", error))
  }

  return (
      <div>
        <h1>Lista de Tareas</h1>
        <TaskForm agregarTarea={agregarTarea}/>
        <TaskList tareas={tareas} eliminarTarea={eliminarTarea}/>
      </div>

  )
}

export default App
