const { Sales } = require("../db");

async function searchSalesById(userId) {
    // Verificar si el usuario no existe
    let user = await Sales.findAll({
        where : { userId: userId },
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    })  
    if (!user) { 
        throw new Error('Usuario no encontrado');
    }  
    return user;
}


module.exports = { searchSalesById };