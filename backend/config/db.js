const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.DB_URL,)

        console.log("DB connected .........")

    }catch(error){
        console.log(error);
          process.exit();
    }

}


module.exports = connectDB