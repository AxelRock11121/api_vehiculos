const express = require('express');
const {createVehiculo,actualizarVehiculo,borrarVehiculo,consultarVehiculos,getById,getestatus} = require('../controllers/VehiculosController.js');
const authenticateToken=require('../middleware/authMiddleware.js');

const router=express.Router();

router.post('/createVehiculo',authenticateToken,createVehiculo);
router.put('/ActualizarVehiculo',authenticateToken,actualizarVehiculo);
router.post('/BorrarVehiculo',authenticateToken,borrarVehiculo);
router.get('/consultarVehiculos',authenticateToken,consultarVehiculos);
router.get('/GetById/:id',authenticateToken,getById);
router.get('/getstatus',authenticateToken,getestatus);

module.exports=router;