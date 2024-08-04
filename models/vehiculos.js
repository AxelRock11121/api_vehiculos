const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
      edr_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Estatus_registro',
            key:'Id'
        }
      },
      caracteristicas_adicionales:{
        type:DataTypes.STRING,
        allowNull:true
      }      
},
{
  tableName:'VEHICULOS',
  timestamps:false
}
);
module.exports=vehiculo;