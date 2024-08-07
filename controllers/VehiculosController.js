const { where } = require('sequelize');
const vehiculo = require('../models/vehiculos');
const estatusvehiculo = require('../models/EstatusVehiculo');
const sequelize = require('../config/database');


const createVehiculo = async (req, res) => {
    const { marca, modelo, color, placa, año } = req.body;
    try {
        const newVehiculo = await vehiculo.create({
            marca,
            modelo,
            color,
            placa,
            año,
            ev_id: 1,
        });
        if (newVehiculo) {
            return res.status(201).json(newVehiculo);
        } else {
            return res.status(500).json({ message: 'Error creating vehiculo' });
        }


    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

};

const actualizarVehiculo = async (req, res) => {
    const { id, marca, modelo, color, placa, año, ev_id } = req.body;
    try {
        const [affectedRows] = await vehiculo.update({
            marca,
            modelo,
            color,
            placa,
            año,
            ev_id
        }, { where: { id: id } });
        if (affectedRows == 0) {
            return res.status(404).json({ message: 'vehiculo no encontardo' });
        }
        res.status(200).json({ message: 'vehiculo actualizado' });

    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const borrarVehiculo = async (req, res) => {
    const { id } = req.body;
    try {
        const eliminarvehiculo = await vehiculo.findByPk(id);

        if (!eliminarvehiculo) {
            return res.status(404).json({ message: 'Vehiculo no encontrado' });
        }
        await eliminarvehiculo.destroy();
        res.status(200).json({ mensaje: 'vehculo eliminado' });
    }
    catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
};

const consultarVehiculos = async (req, res) => {
    try {
        const listaVehiculos = await vehiculo.findAll({
            include: [{
                model: estatusvehiculo,
                attributes: ['id', 'descripcion'] // Campos que deseas incluir del modelo Estatus_registro
              }]
        });
        res.status(200).json({ vehiculos: listaVehiculos });
    }
    catch (err) {
        res.status(500).json({ mensaje: err.message })
    }
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const vehicle = await vehiculo.findByPk(id);
        if (!vehicle) {
            res.status(404).json({ menssage: 'no se encontro el vehiculo' });
        }
        res.status(200).json(vehicle);

    }
    catch (err) {
        res.status(500).json({ message: err.menssage });
    }
};

const getestatus = async (req, res) => {
    try {
        const estatus = await estatusvehiculo.findAll();
        res.status(200).json(estatus);
    }
    catch (err) {
        res.status(500).json(err.menssage);
    }
};
module.exports = { createVehiculo, actualizarVehiculo, borrarVehiculo, consultarVehiculos, getById, getestatus };