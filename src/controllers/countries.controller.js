//En estos archivos vamos a poner ahora sí la lógica
//de cada ruta y request http de nuestra aplicación

const getCountries = (req, res) => { //subruta
  res.status(200).json({
    msg: "GET countries"
  })
}

const createCountry = (req, res) => { //subruta
  res.status(200).json({
    msg: "POST countries"
  })
}

const updateCountry = (req, res) => { //subruta
  res.status(200).json({
    msg: "PUT countries"
  })
}

const deleteCountry = (req, res) => { //subruta
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
