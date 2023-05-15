const { Users } = require("../db");

const updateUser = async (req, res) => {

  const { id, name, userAdmin, email, password, image, phone } = req.body;

  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    await user.update({ name, userAdmin, email, password, image, phone });

    return res.json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

// module.exports = { updateUser };


const express = require("express");
const router = express.Router();
// const updateUser = require("../controllers/userController");

router.put("/", updateUser);

module.exports = router;
