const { Router } = require("express");
const express = require("express");
const { login } = require('../controllers/login')

const router = Router();
router.use(express.json());


// Ruta para iniciar sesión
router.get('/', async (req, res) => {
    
    let { user, password } = req.body;
    try {

      let dataUser = await login(user, password)

    // Enviar el los datos al frontend
    res.status(200).json({ dataUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;