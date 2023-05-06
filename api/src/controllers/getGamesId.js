require("dotenv").config();
const { Videogame, Genre } = require("../db");

async function searchId(id) {
  // const requirements = resultado.platforms[3].requirements_en;
    let resultado = await Videogame.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }      
        // include: {
        //   model: Genre,
        //   attributes: ["name"],
        //   through: {attributes: []},
        // },      
    });
    if (!resultado) throw new Error(`No existen juegos con el id: ${id}`);
    // Obtener los requisitos en inglés de platforms [3]
    let requirements_en = resultado.platforms[3]?.requirements_en
console.log(requirements_en);
  // // Agregar los requisitos como propiedad del resultado
  // resultado = resultado.toJSON();
  // resultado.requirements = requirements;
    return resultado;
  }


module.exports = { searchId };