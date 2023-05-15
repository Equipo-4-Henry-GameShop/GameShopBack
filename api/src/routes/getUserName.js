const { Router } = require("express");
const { searchUser } = require("../controllers/getUserName");
const express = require("express");


const router = Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    let resultado = await searchUser(name);
    res.status(200).json( resultado );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;