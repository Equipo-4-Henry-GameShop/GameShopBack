const { Users } = require("../db");

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Realiza el borrado lógico
    user.userAdmin = false;
    await user.save();

    return res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};

// module.exports = { deleteUser };


const express = require("express");
const router = express.Router();
// const { updateUser } = require("../controllers/userController");

router.delete("/:id", deleteUser);

module.exports = router;
