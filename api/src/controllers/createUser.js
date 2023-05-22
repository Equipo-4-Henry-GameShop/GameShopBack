const { Users } = require ("../db");
const bcrypt = require('bcrypt')

async function createUser({
    id,
    user,
    password,
    fullname,
    userAdmin,
    email,
    date,
    image,
    phone,
    tac,
    newsLetter,
}) {
    if(!user || !userAdmin || !email || !password)
    throw new Error("Datos deben estar completos");

    // Genera un hash de la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    let resultado = await Users.create({
        id,
      user,
      password: hashedPassword,
      fullname,
      userAdmin,
      email,
      date,
      image,
      phone,
      tac,
      newsLetter,
    })
}

module.exports = { createUser }