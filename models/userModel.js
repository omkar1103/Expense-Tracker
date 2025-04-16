const mongoose=require("mongoose");

const userSchema =new mongoose.Schema(

    {
        name:{
            type:String,
            required:[true,"Name is required"],
         },
         email:{
            type:String,
            required:[true,"Email is required and should be unique"],
            unique:true,
         },
         password:{
            type:String,
            required:[true,"password is required"],
         },

    },
{timestamps:true}
)
const UserModel=mongoose.model('users',userSchema);
module.exports=UserModel