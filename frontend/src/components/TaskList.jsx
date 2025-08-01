import { useState } from "react";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";

function TaskList({ tareas }) {
  const [filtro, setFiltro] = useState("");
  console.log("Date de tareas", tareas)

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return isNaN(date) ? "Fecha invalida" : date.toLocaleDateString()
  };

  if (!tareas || tareas.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-4 text-xl">
        No hay tareas aun.
      </p>
    );
  }

  const tareasFiltradas = tareas.filter((tarea) => {
    const titulo = typeof tarea.titulo === "string" ? tarea.titulo : "";
    return titulo.includes(filtro);
  });

  return (
    <div className=" max-w-2x1 mx-auto mt-8 bg-gray-900 p-6 rounded shadow">
      <h2 className="text-white text-2x1 font-bold mb-4 text-center">
        Lista de tareas
      </h2>

      <input
        type="text"
        placeholder="Buscar por titulo"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {tareasFiltradas.length === 0 ? (
        <p className="text-gray-400 text-center">No hay tareas que coincidan</p>
      ) : (
        <ul className="space-y-4">
          {tareasFiltradas.map((tarea) => (
            <li
              key={tarea.id}
              className="bg-gray-800 text-white p-3 rounded flex justify-between"
            >
              {" "}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>{tarea.titulo}</span>
                </div>
                <small className="text-gray-400">
                  {formatDate(tarea.date)}
                </small>
              </div>
              <Link
                to={`/task/${tarea.id}`}
                className="text-blue-300 underline text-sm"
              >
                Editar
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default TaskList;
