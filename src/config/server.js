const express = require("express");

class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    //lista las rutas de los modulos que tengas y usalas como variables
    this.countriesPath = "/api/countries";
    this.usersPath = "/api/users";
    this.routes();
  }

  //Los modificadores de acceso (public, private protected) son de TS no de JS, si los pones marca error.
  routes(){

    //Esto es un middleware, recibe una ruta e indica con qué archivo de configuración se va a comportar
    //Define una ruta principal
    this.app.use(this.countriesPath, require("../routes/countries.route"));
    this.app.use(this.usersPath, require("../routes/users.route"));

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
