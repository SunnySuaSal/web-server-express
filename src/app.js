const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola express");
})

app.get("/alumnos", (req, res) => {
  res.send("Hola alumnos express");
})

app.listen(8081);
