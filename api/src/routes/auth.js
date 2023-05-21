const { Router } = require("express");
const express = require("express");
const login = require ('../controllers/auth.js')

const router = Router();
router.use(express.json());

const secretKey = 'tu_clave_secreta'; // Reemplaza esto con tu clave secreta real


// Ruta para iniciar sesión
router.post('/', async (req, res) => {
    
    try {
      let { user, password } = req.body;

      let tokenLogin = await login(user, password)

    // Aquí debes realizar la lógica de autenticación y verificación de usuario en tu base de datos o sistema de autenticación
    // Por simplicidad, supondremos que ya tienes un usuario almacenado en tu base de datos

    // const user = {
    //   id: 1,
    //   username: 'usuario',
    //   passwordHash: '$2b$10$DXXTQD5pPF5HtuCjM/ZoiuNfsQOHhJpFf.Gx3znRufwz75SCS3mz6', // Contraseña: password
    // };

    // // Verificar la contraseña
    // const match = await bcrypt.compare(password, user.passwordHash);
    // if (!match) {
    //   return res.status(401).json({ message: 'Credenciales inválidas' });
    // }

    // Generar el token de acceso
    // const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

    // Enviar el token al frontend
    res.status(200).json({ tokenLogin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
