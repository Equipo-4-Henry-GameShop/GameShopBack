const { Router } = require("express");
const express = require("express");
const { addToCart } = require("../controllers/createCart");


const router = Router();
router.use(express.json());
  
router.post("/", async (req, res) => {
    const { userId, videogameId, quantity, price } = req.body;
    
    try {
      let resultado = await addToCart({
        userId,
        videogameId,
        quantity,
        price,
    })
    res.status(200).json({ message: "Videogame agregado al carrito" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;




