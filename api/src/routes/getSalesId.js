const { Router } = require("express");
const { searchSalesById } = require("../controllers/getSalesId");
const express = require("express");

const router = Router();
router.use(express.json());

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const resultBD = await searchSalesById(userId);
    if (resultBD.length <= 0) {
        res.status(404).json({error: "No hay ventas para mostrar"})
    } else {
        res.status(201).json(resultBD);
    }
    console.log(resultBD);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;