const { Users } = require ("../db")

async function createUser({
    id,
    user,
    fullname,
    password,
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

    let resultado = await Users.create({
        id,
        user,
        fullname,
        password,
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