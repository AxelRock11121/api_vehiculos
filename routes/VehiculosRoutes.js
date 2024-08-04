const express = require('express');
const {createVehiculo,actualizarVehiculo,borrarVehiculo,consultarVehiculos} = require('../controllers/VehiculosController.js');
const authenticateToken=require('../middleware/authMiddleware.js');

const router=express.Router();

router.post('/createVehiculo',authenticateToken,createVehiculo);
router.put('/ActualizarVehiculo',authenticateToken,actualizarVehiculo);
router.post('/BorrarVehiculo',authenticateToken,borrarVehiculo);
router.get('/consultarVehiculos',authenticateToken,consultarVehiculos);

module.exports=router;