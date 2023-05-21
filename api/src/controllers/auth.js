const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../db'); // Importa el modelo de usuario

const secretKey = 'tu_clave_secreta'; // Reemplaza con tu clave secreta

async function login ({user, password}) {

    try {
      // Busca al usuario en la base de datos por su nombre de usuario
      let userDb = await Users.findOne({ where: { user } });
    
      // Si no se encuentra al usuario, devuelve un error de autenticación
      if (!userDb) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
    
      // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
      const isPasswordValid = await bcrypt.compare(password, Users.password);
    
      // Si la contraseña no coincide, devuelve un error de autenticación
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
    
      // Genera un token JWT para el usuario
      const token = jwt.sign({ userId: Users.id }, { expiresIn: '1h' });
    
      // Devuelve el token al frontend
      return res.json({ token });
    } catch (error) {
      console.error('Error de autenticación:', error);
      return res.status(500).json({ message: 'Error de autenticación' });
    }

}




module.exports = { login };
