const { Users } = require("../db");
const { Op } = require("sequelize");

async function searchUser(name) {

  if (!name) { // si no se envia nombre, trae todos los Usuarios
    let allUsers = await Users.findAll();
    if (allUsers.length === 0) {
      return "message: No se encontraron usuarios en la Base de Datos";
    }
    return allUsers;

  } else {
    let userName = await Users.findAll({ // si se envia nombre, buscar en la DB por nombre
      
      where: { name: { [Op.iLike]: `%${name}%` } },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }
    });
    if (userName.length === 0) {
      return `No se encontraron usuarios con el nombre: ${name}`;
    }
    return userName;
  }
}

module.exports = { searchUser };