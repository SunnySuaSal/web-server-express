const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hola express");
})

app.get("/alumnos", (req, res) => {
  res.send("Hola alumnos express");
})

app.listen(port);
