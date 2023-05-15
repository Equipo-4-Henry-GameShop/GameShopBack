// const { Router } = require("express");
// const express = require("express");
// const { addToCart } = require("../controllers/createCart")
// // const { Videogame, Cart } = require('../db')

// const router = Router();
// router.use(express.json());

// router.post('/add/:id', async (req, res) => {
//   const { id } = req.params;

//       try {
//         let newCart = await addToCart(
//           // videogameId,
//           // quantity,
//           // price,
//           id
//         );
 
//     res.status(201).json({newCart});
//         } catch (error) {
//           res.status(404).json({ error: error.message });
//         } 
// });

// module.exports = router;


// const createCart = async (req, res) => {
  //   const { userId } = req.body;
  
  //   try {
//     // Buscamos el usuario en la base de datos
//     const user = await Users.findByPk(userId);
//     if (!user) throw new Error("Usuario no encontrado");

//     // Creamos un carrito vacío y lo asociamos al usuario
//     const cart = await Carts.create();
//     await user.setCart(cart);

//     res.status(200).json(cart);
//   } catch (error) {
  //     res.status(404).json({ error: error.message });
  //   }
  // };



  const { Users, Videogame, Carts, CartGame } = require("../db");
  
  const addToCart = async (req, res) => {
    const { userId, videogameId, quantity, price } = req.body;
    
    try {
      // Buscamos el usuario en la base de datos
      const user = await Users.findByPk(userId);
      if (!user) throw new Error("Usuario no encontrado");
      
      // Buscamos el videogame en la base de datos
      const videogame = await Videogame.findByPk(videogameId);
      if (!videogame) throw new Error("Videogame no encontrado");

    // Buscamos el carrito asociado al usuario
    // const cart = await user.getCart();
    // Verificar si ya existe un carrito para el usuario
    let cart = await Carts.findOne({ where: { UserId: userId } });
          if (!cart) {
    // Si no existe, crear un nuevo carrito y asignarlo al usuario
            cart = await Carts.create({
              videogameId,
              quantity,
              price,              
              UserId: userId,
            });
          }

    // Buscamos si el videogame ya está en el carrito
    const cartVideogame = await CartGame.findOne({
      where: {
        cartId: cart.id,
        videogameId: videogame.id,
      },
    });

    // Si ya está en el carrito, actualizamos la cantidad y el precio total
    if (cartVideogame) {
    const newQuantity = cartVideogame.quantity + quantity;
      const newTotalPrice = newQuantity * price;
      await cartVideogame.update({
        quantity: newQuantity,
        total: newTotalPrice,
      });
    } else {
      // Si no está en el carrito, lo agregamos con la cantidad y el precio total
      await CartGame.create({
        cartId: cart.id,
        videogameId: videogame.id,
        quantity,
        price,
        total: quantity * price,
      });
    }

    res.status(200).json({ message: "Videogame agregado al carrito" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { addToCart };


const { Router } = require("express");
const express = require("express");

const router = Router();
router.use(express.json());


// Ruta para crear un carrito vacío y asociarlo a un usuario
// router.post("/:userId", createCart);

// Ruta para agregar un videogame a un carrito
router.post("/", addToCart);

module.exports = router;




