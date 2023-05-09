// const { Router } = require("express");
// // const { filteredPlatforms } = require('../controllers/filteredPlatforms')
// const express = require("express");


// const router = Router();
// router.use(express.json());


// // router.get("/:platform", async (req, res) => {
  
// //     let { plat } = req.params;
  
// //     try {
// //       let resultado = await filteredPlatforms(plat);
// //       console.log(resultado);
// //       res.status(200).json( resultado );
// //     } catch (error) {
// //       res.status(404).json({ error: error.message });
// //     }
// //   });
//   const games = [
//     {
//       "id": 11147,
//       "name": "ARK: Survival Of The Fittest",
//       "released": "2016-03-15",
//       "rating": 2.64,
//       "platforms": [
//         "Android",
//         "Linux",
//         "macOS",
//         "PC",
//         "iOS"
//       ],  
//     },
//     {
//       "id": 9743,
//       "name": "Unturned",
//       "released": "2014-07-07",
//       "rating": 2.7,
//       "platforms": [
//         "PlayStation 4",
//         "Linux",
//         "macOS",
//         "PC",
//         "Xbox One"
//       ],    
//     },
//     {
//       "id": 28179,
//       "name": "SEGA Mega Drive and Genesis Classics",
//       "released": "2010-06-01",
//       "rating": 3,
//       "platforms": [
//         "PlayStation 4",
//         "macOS",
//         "Linux",
//         "Xbox One",
//         "Nintendo Switch",
//         "PC"
//       ],    
//     }
//   ];
  
//   function filterGamesByPlatform(plat) {
//     // const platform = req.params.platform;
//     const filteredGames = games.filter(game => game.platforms.includes(plat));
//     return filteredGames;
//   }

// router.get("/:platform", async (req, res) => {
  
//     let { plat } = req.params;
  
//     try {
//       let resultado = await filterGamesByPlatform(plat);
//       console.log(resultado);
//       res.status(200).json( resultado );
//     } catch (error) {
//       res.status(404).json({ error: error.message });
//     }
//   });
  

  

  
  

// module.exports = router;


