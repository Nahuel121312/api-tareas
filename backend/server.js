const express = require("express");
const app = express();

app.use(express.json());

const tareasRutas = require("./routes/task.routes");
app.use("/api",tareasRutas);

app.listen(1234);
console.log(`Server on port ${1234}`);