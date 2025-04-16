const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server Running on ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`${error}`);

    }

};

module.exports=connectDB;