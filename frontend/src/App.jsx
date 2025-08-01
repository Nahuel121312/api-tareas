import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";

function App() {
  const [tareas, setTareas] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  //Get cargar tareas desde el backend al iniciar
  useEffect(() => {
    fetch(`${apiUrl}/tasks`)
      .then((res) => res.json())
      .then((data) => setTareas(data))
      .catch((error) => console.error("Error al obtener tareas:", error));
  }, [apiUrl]);

  //  Agregar una tarea
  const agregarTarea = (nuevaTarea) => {
    fetch("http://localhost:1234/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaTarea),
    })
      .then((res) => res.json())
      .then((tareaCreada) => setTareas([...tareas, tareaCreada]))
      .catch((error) => console.error("Error al crear tarea", error));
  };

  //Eliminar tarea
  const eliminarTarea = (id) => {
    fetch(`http://localhost:1234/api/tasks/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setTareas((prev) => prev.filter((t) => t.id !== id));
        } else {
          console.error("Error al eliminar tarea");
        }
      })
      .catch((error) => console.error("Error: ", error));
  };

  //Actualizar tarea
  const actualizarTarea = (id, tareaActualizada) => {
    fetch(`http://localhost:1234/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tareaActualizada),
    })
      .then((res) => res.json())
      .then((tareaModificada) => {
        setTareas((prev) =>
          prev.map((t) => (t.id === id ? tareaModificada : t))
        );
      })
      .catch((error) => console.error("Error al actualizar tarea:", error));
  };

  return (
    <div>
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Lista de tareas</h1>
          <nav className="flex gap-4 text-lg text-gray-700">
            <Link
              className="px-3 py-1 border-r-2 border-gray-300 hover:text-black transition"
              to="/"
            >
              Tareas
            </Link>{" "}
            <Link
              className="px-3 py-1 hover:text-black transition"
              to="/taskForm"
            >
              Formulario
            </Link>
          </nav>
        </div>
      </header>

      <Routes>
        {/* Lista de tareas*/}
        <Route
          path="/"
          element={
            <TaskList
              tareas={tareas}
              eliminarTarea={eliminarTarea}
              actualizarTarea={actualizarTarea}
            />
          }
        />

        {/* Crear nuvea tarea */}
        <Route
          path="/taskForm"
          element={<TaskForm agregarTarea={agregarTarea} />}
        />

        {/* Ver/Editar tarea individual*/}

        <Route
          path="/task/:id"
          element={
            <TaskItem
              tareas={tareas}
              eliminarTarea={eliminarTarea}
              actualizarTarea={actualizarTarea}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
