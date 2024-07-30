// backend/controllers/userController.js
// const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'your_secret_key';

// exports.register = async (req, res) => {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     try {
//         const user = await User.create({ username, password: hashedPassword });
//         res.status(201).send({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).send({ message: 'Error registering user', error });
//     }
// };

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Llamar al procedimiento almacenado
        const result = await sequelize.query(
          'EXEC sp_validar_usuario ?, ?',
          {
            replacements: [ username, password ],
            type: Sequelize.QueryTypes.SELECT
          }
        );
    
        // Verificar el resultado
        if (result.length > 0) {
          const record = result[0];
          if (record.success == true) {
            console.log(record.message); // Login Successful
            const token = jwt.sign({ username: username }, JWT_SECRET, { expiresIn: '1h' });
            res.send({ token });
            // return { success: true, userId: record.UserId };
          } else {
            console.log(record.message); // Invalid Username or Password
            // return { success: false, message: record.Message };
          }
        } else {
          return { success: false, message: 'Unexpected response format' };
        }
      } catch (err) {
        console.error('SQL error', err);
        return { success: false, message: 'Database error' };
      }      
};
module.exports=login;
