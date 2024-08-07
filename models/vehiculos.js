const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const estatusvehiculo = require('../models/EstatusVehiculo');

const vehiculo=sequelize.define('Vehiculo',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      marca:{
        type:DataTypes.STRING,
        allowNull:false
      },
      modelo:{
        type:DataTypes.STRING,
        allowNull:false
      },
      color:{
        type:DataTypes.STRING,
        allowNull:false
      },
      placa:{
        type:DataTypes.STRING,
        allowNull:false
      },
      año:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      ev_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Estatus_vehiculo',
            key:'Id'
        }
      }     
},
{
  tableName:'VEHICULOS',
  timestamps:false
}
);

vehiculo.belongsTo(estatusvehiculo, { foreignKey: 'ev_id' });

module.exports=vehiculo;