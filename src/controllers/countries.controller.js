//En estos archivos vamos a poner ahora sí la lógica
//de cada ruta y request http de nuestra aplicación

//Define el tipo de req y res para que nos aparezcan los métodos correspondientes
//no es necesario, pero aveces útil
const { response, request } = require("express");

const getCountries = (req = request, res = response) => { //subruta

  const { q } = req.query;

  res.status(200).json({
    msg: "GET countries",
    q
  })
}

const createCountry = (req = request, res = response) => { //subruta

  const { name, population, flag } = req.body;

  if(!name || !population || !flag){
    res.status(400).json({
      msg: "Datos incompletos"
    })
    return;
  }

  res.status(200).json({
    msg: "POST countries",
    name,
    population,
    flag
  })
}

const updateCountry = (req = request, res = response) => { //subruta
  res.status(200).json({
    msg: "PUT countries"
  })
}

const deleteCountry = (req = request, res = response) => { //subruta
  res.status(200).json({
    msg: "DELETE countries"
  })
}

module.exports = {
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry
}
