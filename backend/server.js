require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

app.use(express.json())

const tareasRutas = require("./routes/task.routes")
app.use("/api",tareasRutas)

const port = process.env.PORT || 1234

app.listen(1234);
console.log(`Server on port ${1234}`)