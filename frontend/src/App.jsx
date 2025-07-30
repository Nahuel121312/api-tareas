import TaskForm from "./components/TaskForm"
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Link, Route} from "react-router-dom";

function App() {
  const [tareas, setTareas] = useState([])
  console.log(tareas)

  //Get mostrar tareas
  useEffect(() => {
    fetch("http://localhost:1234/api/tasks")
    .then(res => {
      if(!res.ok) throw new Error("Error en la respuesta del servidor") 
      return res.json()
    })
      .then(data => setTareas(data))
    .catch(error => console.error("Error al obtener tareas",error))
  }, []);

  //Metodo POST
  const agregarTarea = (titulo, descripcion) => {
    fetch("http://localhost:1234/api/tasks", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ titulo, descripcion, completed:false})
    })
    .then(res => {
      if(!res.ok) throw new Error("Error en la respuesta del servidor")
      return res.json()
    })
    .then(nuevaTarea => {
      setTareas(prev => [...prev, nuevaTarea])
    })
    .catch(error => console.error("Error al crear tarea", error))
  }

  //Metodo DELETE
  const eliminarTarea = (id) => {
    console.log("Id en App"+id)
    fetch(`http://localhost:1234/api/tasks/${id}`, {
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
  //Metodo PUT
  const actualizarTarea = (id, tareaActualizada) =>{
    fetch(`http://localhost:1234/api/tasks/${id}`, {
      method:"PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(tareaActualizada)
    })
    .then(res => {
      if(!res.ok) throw new Error("Error en la respuesta del servidor")
      return res.json()
    })
    .then(tareaModificada => {
      setTareas(prev => prev.map(t => (t.id === id ? tareaModificada : t)))
    })
    .catch(error => console.error("Error al actualizar tarea:",error))
  }

  return (
      <BrowserRouter>
        <h1>Lista de Tareas</h1>
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/new-task">Nueva Tarea</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <TaskList
            tareas={tareas}
            eliminarTarea={eliminarTarea}
            actualizarTarea={actualizarTarea} 
            />
            }
            />
          <Route path="/new-task" element={<TaskForm agregarTarea={agregarTarea} />}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
