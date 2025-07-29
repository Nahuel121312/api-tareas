const express = require("express")
const rutas = express.Router()
const {
    obtenerTareas,
    crearTarea,
    eliminarTareaPorId,
    actualizarTareaPorId,
} = require("../controllers/task.controller")
const validarCampos = require("../middlewares/validarCampos")
const validarID = require("../middlewares/validarId")

rutas.get("/tasks", obtenerTareas)
rutas.post("/tasks", validarCampos, crearTarea)
rutas.put("/tasks/:id", validarID, actualizarTareaPorId)
rutas.delete("/tasks/:id", validarID, eliminarTareaPorId)


module.exports = rutas;