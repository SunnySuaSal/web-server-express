const { response, request } = require("express");

const getUsers = (req = request, res = response) => { //subruta
  res.status(200).json({
    msg: "GET users"
  })
}

const createUser = (req = request, res = response) => { //subruta
  res.status(200).json({
    msg: "POST user created"
  })
}

const updateUser = (req = request, res = response) => { //subruta
  res.status(200).json({
    msg: "PUT user updated"
  })
}

const deleteUser = (req = request, res = response) => { //subruta
  res.status(200).json({
    msg: "DELETE user deleted"
  })
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
