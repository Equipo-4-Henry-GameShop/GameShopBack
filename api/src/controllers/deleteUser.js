const { Users } = require("../db");

async function deleteUser (id) {

    let user = await Users.findByPk(id);
    

    // Realiza el borrado lógico
    user.userAdmin = !user.userAdmin;
    await user.save(); 
};

module.exports = { deleteUser };
