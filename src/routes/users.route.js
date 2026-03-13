const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "GET users"
  })
});

router.post("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "POST users"
  })
});

router.put("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "PUT users"
  })
});

router.delete("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "DELETE users"
  })
});

module.exports = router;
