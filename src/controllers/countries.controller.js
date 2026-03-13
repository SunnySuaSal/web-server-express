//En estos archivos vamos a poner ahora sí la lógica
//de cada ruta y request http de nuestra aplicación

const countriesGet = (req, res) => { //subruta
  res.status(200).json({
    msg: "GET countries"
  })
}

module.exports = {
  countriesGet
}
