const { Videogame } = require("../db"); // Fuente de datos de videojuegos
const { Op } = require ('sequelize');

// Endpoint para obtener los videojuegos por plataforma

   async function filteredPlatforms (platform){ // Obtener el parámetro "platform" de la consulta
    let filterByPlatform = await Videogame.findAll({
                where: {
            platforms: {
                [Op.contains]: [platform]
            } // Agregar la condición where para filtrar por plataforma
          },
    })
      return filterByPlatform;
}

module.exports = { filteredPlatforms }