const { Router } = require("express");
const { countriesGet } = require("../controllers/countries.controller");
const router = Router();

router.get("/", countriesGet);

router.post("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "POST countries"
  })
});

router.put("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "PUT countries"
  })
});

router.delete("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "DELETE countries"
  })
});

module.exports = router;
