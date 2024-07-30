const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const vehiculos=sequelize.define('vehiculos',{
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
      fecha_registro:{
        type:DataTypes.DATE,
        allowNull:false
      },
      edr_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Estatus_registro',
            key:'Id'
        }
      },
      fecha_mod:{
        type:DataTypes.DATE,
        allowNull:true
      },
      caracteristicas_adicionales:{
        type:DataTypes.STRING,
        allowNull:true
      },
      tableName: 'Vehiculos', // Nombre de la tabla en la base de datos
        timestamps: true,
});
module.exports=vehiculos;