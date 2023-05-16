const { Users, Videogame, Carts, CartGame } = require("../db");

async function addToCart({
    userId,
    videogameId,
    quantity,
    price,
})

{
 // Buscamos el usuario en la base de datos
 const user = await Users.findByPk(userId);
 if (!user) throw new Error("Usuario no encontrado");

// Buscamos el videogame en la base de datos
const videogame = await Videogame.findByPk(videogameId);
if (!videogame) throw new Error("Videogame no encontrado");


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
    await Carts.create({
    cartId: cart.id,
    videogameId: videogame.id,
    quantity,
    price,
    total: quantity * price,
    });
}
}

module.exports = { addToCart };