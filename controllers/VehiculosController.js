const { where } = require('sequelize');
const vehiculo=require('../models/vehiculos');

const createVehiculo=async (req,res)=>{
    const { marca, modelo, color, fecha_registro, edr_id, fecha_mod, caracteristicas_adicionales } = req.body;
    try{
    const newVehiculo=vehiculo.create({
        marca,
      modelo,
      color,
      fecha_registro,
      edr_id,
      fecha_mod,
      caracteristicas_adicionales
    });

    res.status(201).json(newVehiculo);
}
catch(err){
    res.status(500).json({message:err.message})
}

};

const actualizarVehiculo= async(req,res)=>{
    const {id, marca, modelo, color, fecha_registro, edr_id, fecha_mod, caracteristicas_adicionales } = req.body;
   try{
    const [affectedRows]=vehiculo.update({
        marca,
      modelo,
      color,
      fecha_registro,
      edr_id,
      fecha_mod,
      caracteristicas_adicionales
    },{where:{id:id}});
    if(affectedRows==0){
        res.status(404).json({message:'vehiculo no encontardo'});
    }
    res.status(200).json({message:'vehiculo actualizado'});

}
catch(err){
    res.status(500).json({message:err.message});
}    
};

module.exports={createVehiculo,actualizarVehiculo};