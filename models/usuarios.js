// backend/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const usuarios = sequelize.define('Usuarios', {
    Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false        
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    Correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Edr_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    Fecha_Registro: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false
    },
});

module.exports = User;
