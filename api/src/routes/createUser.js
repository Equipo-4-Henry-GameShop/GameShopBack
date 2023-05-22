const { Router } = require("express");
const express = require("express");
const { createUser } = require ("../controllers/createUser");

const router = Router();
router.use(express.json());

router.post("/", async (req, res) => {
 
  let { id, user, password, fullname, userAdmin, email, date, image, phone, tac, newsLetter } = req.body;   

  try {

      let newUser = await createUser({
      id,
      user,
      password,
      fullname,
      userAdmin,
      email,
      date,
      image,
      phone,
      tac,
      newsLetter,           
      });
      res.status(201).json({message: 'Usuario creado exitosamente', data: newUser});
  } catch (err) {
    res.status(400).json({ message: "El usuario ya existe" });
    
  //   if(err.idUser === 'SequelizeUniqueConstraintError'){
  //       res.status(409).json({ message: "El usuario ya existe" });
  //   } else if (err.idUser === 'ValidationError'){
  //       res.status(400).json({ message: 'Faltan algunos datos', error: err.message });
  //   } else {
  //       res.status(500).json({ message: 'Datos no guardados, Verificar datos'});
  //   }
  }
});

module.exports = router;
