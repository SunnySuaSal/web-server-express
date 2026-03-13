const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => { //subruta
  res.status(200).json({
    msg: "GET countries"
  })
});

module.exports = router;
