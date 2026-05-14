//En estos archivos vamos a poner ahora sí la lógica
//de cada ruta y request http de nuestra aplicación

//Define el tipo de req y res para que nos aparezcan los métodos correspondientes
//no es necesario, pero aveces útil
const { response, request } = require("express");

const getCountries = (req = request, res = response) => { //subruta

  const { q } = req.query;

  const countries = [ //Es convencion que comiencen con guion bajo

    {

    name: 'Albania',

    capital: 'Tirana',

    region: 'Europe',

    population: 2837743,

    flag: 'https://flagcdn.com/al.svg'

  },

  {

    name: 'Argentina',

    capital: 'Buenos Aires',

    region: 'Americas',

    population: 45810000,

    flag: 'https://flagcdn.com/ar.svg'

  },

  {

    name: 'Australia',

    capital: 'Canberra',

    region: 'Oceania',

    population: 26010000,

    flag: 'https://flagcdn.com/au.svg'

  },

  {

    name: 'Brazil',

    capital: 'Brasília',

    region: 'Americas',

    population: 216400000,

    flag: 'https://flagcdn.com/br.svg'

  },

  {

    name: 'Canada',

    capital: 'Ottawa',

    region: 'Americas',

    population: 38900000,

    flag: 'https://flagcdn.com/ca.svg'

  },

  {

    name: 'China',

    capital: 'Beijing',

    region: 'Asia',

    population: 1412000000,

    flag: 'https://flagcdn.com/cn.svg'

  },

  {

    name: 'Egypt',

    capital: 'Cairo',

    region: 'Africa',

    population: 112700000,

    flag: 'https://flagcdn.com/eg.svg'

  },

  {

    name: 'France',

    capital: 'Paris',

    region: 'Europe',

    population: 67000000,

    flag: 'https://flagcdn.com/fr.svg'

  },

  {

    name: 'Germany',

    capital: 'Berlin',

    region: 'Europe',

    population: 83200000,

    flag: 'https://flagcdn.com/de.svg'

  },

  {

    name: 'India',

    capital: 'New Delhi',

    region: 'Asia',

    population: 1429000000,

    flag: 'https://flagcdn.com/in.svg'

  },

  {

    name: 'Japan',

    capital: 'Tokyo',

    region: 'Asia',

    population: 125000000,

    flag: 'https://flagcdn.com/jp.svg'

  },

  {

    name: 'Mexico',

    capital: 'Mexico City',

    region: 'Americas',

    population: 126000000,

    flag: 'https://flagcdn.com/mx.svg'

  },

  {

    name: 'Nigeria',

    capital: 'Abuja',

    region: 'Africa',

    population: 227000000,

    flag: 'https://flagcdn.com/ng.svg'

  },

  {

    name: 'South Africa',

    capital: 'Pretoria',

    region: 'Africa',

    population: 60400000,

    flag: 'https://flagcdn.com/za.svg'

  },

  {

    name: 'Spain',

    capital: 'Madrid',

    region: 'Europe',

    population: 48300000,

    flag: 'https://flagcdn.com/es.svg'

  },

  {

    name: 'United Kingdom',

    capital: 'London',

    region: 'Europe',

    population: 67700000,

    flag: 'https://flagcdn.com/gb.svg'

  },

  {

    name: 'United States',

    capital: 'Washington, D.C.',

    region: 'Americas',

    population: 334900000,

    flag: 'https://flagcdn.com/us.svg'

  },

  {

    name: 'Afghanistan',

    capital: 'Kabul',

    region: 'Asia',

    population: 40218234,

    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'

  }
  ]; 

  res.status(200).json(countries)
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
