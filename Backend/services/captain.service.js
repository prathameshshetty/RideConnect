const captainModel=require('../models/captain.model');

module.exports.createCaptain=async({firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{
if(!firstname || !email || !password ||!color || !plate || !capacity)
{
    throw new Error("All firlds are required");
}

const captain=captainModel.create({
    fullname:{
        firstname,lastname
    },
    email,
    password,
    vehicle:{
        color,
        plate,
        capacity,
        vehicleType
    }
   
})

return captain;
}