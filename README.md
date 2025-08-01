# Lista de tareas

Aplicacion fullstack para crear, listar, editar y eliminar tareas
Desarrolada con React + Vite en el frontend y Express en el backend
El backend utiliza un array de objetos tipo JSON en memoria como almacenamiento temporal

---
## 🛠 Tecnologias utilizadas
- **Frontend:**
    -React
    -Vite
    -Tailwind CSS
    -React Router DOM

- **Backend**
    -Node.js
    -Express
    -ESLint

---

## Instalacion y ejecucion

### Clonar repositorio
```bash
git clone https://github.com/Nahuel121312/api-tareas.git
cd api-tareas

//Backend
npm install
npm start
Puerto: http://localhost:1234

//Frontend
cd frontend
npm install
npm run dev
Puerto: http://localhost:5173
```
---

## 📁 Estructura del proyecto
```bash
/CHALLENGEFORIT
|---/backend # API con Express
|   |
|   |---/controllers
|   |   |---task.controller.js
|   |
|   |---/data
|   |   |---task.json
|   |
|   |--/middlewares
|   |   |---validarCampos.js
|   |   |---validarid.js
|   |
|   |---/models
|   |   |---task.model.js
|   |
|   |---/routes
|   |   |---task.routes.js
|   |
|   |---.env
|   |---eslint.config.mjs
|   |---package-lock.json
|   |---package.json
|   |---server.js
|
|---/frontend # Aplicacion React
|   |
|   |---/src
|   |   |---/components
|   |   |   |---TaskForm.jsx
|   |   |   |---TaskItem.jsx
|   |   |   |---TaskList.jsx
|   |   |
|   |   |---App.jsx
|   |   |---main.jsx
|   |
|   |---.env
|   |---.gitignore
|   |---eslint.config.js
|   |---index.css
|   |---index.html
|   |---package-lock.json
|   |---package.json
|   |---postcss.config.cjs
|   |---tailwind.config.js
|   |---vite.config.js
|
|---.gitignore
|---/README.md
```
# Funcionalidades Implementadas
* Crear tareas
* Listar todas las tareas
* Editar tareas
* Eliminar tareas
* Busqueda por titulo
* Validacion de campos
* Manejo basico de errores
* Estilos con TailwindCSS
* ESLint configurado en backend
* Almacenamiento en array de objetos JSON en memoria
```bash
## Ejemplo de estructura de una tarea
{
    "id": 1,
    "titulo": "Terminar el proyecto"
    "descripcion": "completar frontend y backend"
    "completado": false
    "date": 1/8/2025 
}

## Endpoints principales del backend
Metodo      Ruta            Descripcion
GET        /api/tasks       Obtener todas las tareas
POST       /api/tasks       Crear nueva tarea
PUT        /api/tasks/:id   Actualizar una tarea
DELETE     /api/tasks/:id   Eliminar una tarea
```
## Contacto
* Email: [agustinconde03@gmail.com](mailto:agustinconde03@gmail.com)
* GitHub: [Nahuel121312](https://github.com/Nahuel121312)
* LinkedIn: [linkedin.com/in/nahuel-conde](https://www.linkedin.com/in/nahuel-conde-8aa282216/)

