const { Router } = require("express");
const express = ("express");
const { Users, Sales, Videogame } = require('../db');
const { route } = require("./getGamesName");

const router = Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        let resultBD = await Sales.findAll({
            //where: { id: id },
            include: {
                model: Users,
                as: 'user',
                attributes: ["id", "name"],
            },
            attributes: { exclude: ["userId"] }
        })
        if(resultBD.length <= 0) {
            res.status(404).json({ error: "No hay ventas para mostrar" })
        } else {
            res.status(201).json(resultBD);
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

module.exports = router;