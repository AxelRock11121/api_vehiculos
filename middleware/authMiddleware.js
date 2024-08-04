// autenficacion por jwb
const jwt = require('jsonwebtoken');

const JWT_SECRET = '1234'

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token vacio' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'token expirado' });
    }

    req.user = user; // Guarda la información del usuario en la solicitud
    next(); // Pasa al siguiente middleware o ruta
  });
};

module.exports = authenticateToken;
