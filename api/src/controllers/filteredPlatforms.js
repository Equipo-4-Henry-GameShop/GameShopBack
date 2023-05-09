// // const { Videogame } = require("../db"); // Fuente de datos de videojuegos


// // // Endpoint para obtener los videojuegos por plataforma

// // //   async function filteredPlatforms (plat){ // Obtener el parámetro "platform" de la consulta
// // //     let platform = await Videogame.findAll()
// // //     let filteredGames = platform.filter((p) => p.platforms.includes(plat));
// // //     // if(platform === 'android'){
// //     // let platformGames = await Videogame.findAll({
// //     //     where: {
// //     //         platforms: platform // Agregar la condición where para filtrar por plataforma
// //     //       },
// //     //     include: [
// //     //         {
// //     //     model: Platform,
// //     //     as: "game_platforms",
// //     //       attributes: [],
// //     //     //   through: {attributes: []},
// //     //     }
// //     // ], 
// //     // })
// //     // console.log(platform);
// //     // console.log(filteredGames);
// //     // return filteredGames;
// // // }
  
// //     // if(platform === 'android'){
// //     //     platformGames.map((game) => ({

// //     //     })); // Devuelve todos los videojuegos si se especifica el parámetro "plarform" como "android"
// // //   return platformGames;
// // // };
// // //   if (platform === 'desc') {
// // //     platformGames.sort((a, b) => b.name.localeCompare(a.name)); // Ordena los videojuegos de forma descendente si se especifica el parámetro "orden" como "desc"
// // //     return platformGames;
// // //   };
// // //   if(platform === 'ratmin') {
// // //     platformGames.sort((a, b) => a.rating - b.rating);

// // //   };
// // //   if(platform === 'ratmax') {
// // //     platformGames.sort((a, b) => b.rating - a.rating);

// // //   };
// // //   if(platform === 'pricemin') {
// // //     platformGames.sort((a, b) => a.price - b.price);

// // //   };
// // //   if(platform === 'pricemax') {
// // //     platformGames.sort((a, b) => b.price - a.price);

// // //   }

// // //   return platforms
// // // }

// // const games = [
// //     {
// //       "id": 11147,
// //       "name": "ARK: Survival Of The Fittest",
// //       "released": "2016-03-15",
// //       "rating": 2.64,
// //       "platforms": [
// //         "Android",
// //         "Linux",
// //         "macOS",
// //         "PC",
// //         "iOS"
// //       ],  
// //     },
// //     {
// //       "id": 9743,
// //       "name": "Unturned",
// //       "released": "2014-07-07",
// //       "rating": 2.7,
// //       "platforms": [
// //         "PlayStation 4",
// //         "Linux",
// //         "macOS",
// //         "PC",
// //         "Xbox One"
// //       ],    
// //     },
// //     {
// //       "id": 28179,
// //       "name": "SEGA Mega Drive and Genesis Classics",
// //       "released": "2010-06-01",
// //       "rating": 3,
// //       "platforms": [
// //         "PlayStation 4",
// //         "macOS",
// //         "Linux",
// //         "Xbox One",
// //         "Nintendo Switch",
// //         "PC"
// //       ],    
// //     }
// //   ];
  
// //   function filteredPlatforms(platform) {
// //     const platform = req.params.platform;
// //     const filteredGames = games.filter(game => game.platforms.includes(platform));
// //     return filteredGames;
// //   }
  

  


// // module.exports = { filteredPlatforms }

// router.use("/games/platforms", filteredPlatforms);

//   // "postgres://postgres:mia081013@localhost:5432/gameshop",