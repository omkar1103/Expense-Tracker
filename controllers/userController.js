 const UserModel = require("../models/userModel");
 
 const loginController = async(req,res)=>{
    try{
        const {email ,password}=req.body;
        const user=await UserModel.findOne({email,password});
        if(!user){
            return res.status(404).send("User Not Found");

        }
        res.status(200).send({
            success:true,
            user,
        });
    }
    catch (error){
        res.status(400).json({
            success:false,
            error,
        });
    }


 };

 const registerController =()=>{

 };

 module.export ={ loginController ,registerController}