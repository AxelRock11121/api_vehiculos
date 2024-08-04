const { where } = require('sequelize');
const vehiculo=require('../models/vehiculos');
const sequelize = require('../config/database');


const createVehiculo=async (req,res)=>{
    const { marca, modelo, color, caracteristicas_adicionales } = req.body;
    try{
    const newVehiculo= await vehiculo.create({
        marca,
      modelo,
      color,
      edr_id:1,
      caracteristicas_adicionales
    });
    if (newVehiculo) {
        return res.status(201).json(newVehiculo);
    } else {
        return res.status(500).json({ message: 'Error creating vehiculo' });
    }

   
}
catch(err){
    res.status(500).json({message:err.message})
}

};

const actualizarVehiculo= async(req,res)=>{
    const {id, marca, modelo, color, caracteristicas_adicionales } = req.body;
   try{
    const [affectedRows]= await vehiculo.update({
        marca,
      modelo,
      color,
      caracteristicas_adicionales
    },{where:{id:id,edr_id:1}});
    if(affectedRows==0){
        res.status(404).json({message:'vehiculo no encontardo'});
    }
    res.status(200).json({message:'vehiculo actualizado'});

}
catch(err){
    res.status(500).json({message:err.message});
}    
};

const  borrarVehiculo= async(req,res)=>{
    const{id}=req.body;
try{ 
    const eliminarvehiculo = await vehiculo.findByPk(id);

    if (!eliminarvehiculo) {
        return res.status(404).json({ message: 'Vehiculo no encontrado' });
    }
await eliminarvehiculo.destroy();
res.status(200).json({mensaje:'vehculo eliminado'});
}
catch(err){
   res.status(500).json({mensaje:err.message});
}
};

const consultarVehiculos=async(req,res)=>{
try{
const listaVehiculos= await vehiculo.findAll({where:{edr_id:1}});
res.status(200).json({vehiculos:listaVehiculos});
}
catch(err){
    res.status(500).json({mensaje:err.message})
}
};
module.exports={createVehiculo,actualizarVehiculo,borrarVehiculo,consultarVehiculos};