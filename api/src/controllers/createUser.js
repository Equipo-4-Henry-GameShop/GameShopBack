const { Users } = require ("../db")

async function createUser({
    id,
    name,
    userAdmin,
    email,
    password,
    image,
    phone,
}) {
    if(!name || !userAdmin || !email || !password)
    throw new Error("Datos deben estar completos");

    let resultado = await Users.create({
        id,
        name,
        userAdmin,
        email,
        password,
        image,
        phone,
    })
}

module.exports = { createUser }