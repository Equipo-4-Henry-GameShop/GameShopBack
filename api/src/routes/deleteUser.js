const { Router } = require('express');
const express = require ("express");
const { deleteUser } = require ("../controllers/deleteUser");

const router = Router();
router.use(express.json());


router.delete("/:id", async (req, res) => {
    let { id } = req.params;
       try {
        let user = await deleteUser(id);
        res.status(200).json({message: "Estado de userAdmin actualizado correctamente"});
      } catch (error) {
        res.status(400).json({ message: `Error al actualizar el estado de userAdmin con ID: ${id}` });
      } 
  });
  
  module.exports = router;

