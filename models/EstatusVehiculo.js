const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const estatusVehiculo=sequelize.define('EstatusVehiculo',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        descripcion:
        {
            type:DataTypes.STRING,
            allowNull:false
        }

},{tableName:'ESTATUS_VEHICULO',timestamps:false});

module.exports=estatusVehiculo;