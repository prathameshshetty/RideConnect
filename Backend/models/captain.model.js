const mongoose=require('mongoose');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const captainSchema=new mongoose.Schema(
    {
        fullname:{
            firstname:{
                type:String,
                required:true,
                minlength:[3,"Firstname must be atleast 3 characters long"]
            },
            lastname:{
                type:String,
                minlength:[3,"Last name should be atleast 3 charcters long"]
            }
        },
        email:{
            type:String,
          
            required:true,
            unique:true,
            lowercase:true,
            match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]

        },
        password:{
            type:String,
            required:true,
            select:false
        },
        socketId:{
            type:String
        },
        status:{
            type:String,
            enum:['active',"inactive"],
            default:"inactive"
        },
        vehicle:{
            color:{
                type:String,
                required:true,
                minlength:[3,'COlor must be at least 3 charcters long']
            },
            plate:{
                type:String,
                required:true,
                minlength:[3,"Plate msut be at least 3 characters long"]
            }
            ,
            capacity:{
                type:Number,
                required:true,
                min:[1,"Capcity must be atleast 1"]
            },
            vehicleType:{
                type:String,
                required:true,
                enum:['car','motorcycle','auto']
            }
        },

        location:{
            lat:{
                type:Number,

            },
            lon:{
                type:Number
            }
            }
    }
)

captainSchema.methods.genrerateAuthToken=function()
{
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"24h"});
    return token;

}

captainSchema.methods.comaprePassword=async function(password){
    return await bcrypt.compare(password,this.password);

}

captainSchema.statics.hashPassword=async function(password ){
    return await bcrypt.hash(password,10);
}


const captainModel=mongoose.model('captain',captainSchema);

module.exports=captainModel;