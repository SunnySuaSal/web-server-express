const express = require("express");

class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.routes();
  }

  //Los modificadores de acceso (public, private protected) son de TS no de JS, si los pones marca error.
  routes(){
    this.app.get("/", (req, res) => {
      res.json({
        msg: "Hola express"
      });
    })

    this.app.get("/alumnos", (req, res) => {
      res.json({
        msg: "Hola alumnos"
      });
    })
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`); //Simple concatenación de cadenas
    })
  }

}

module.exports = Server;
