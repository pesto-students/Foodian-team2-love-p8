const mongoose=require('mongoose');
const foodItemShema=new mongoose.Schema({
    name:{
        type:String,
      //  required:[true,'A  Must Have a Name'],
        unique:true
    },
    price:{
        type:Number,
        //required:[true,'A  Must Have a Price']
    },
    image_url:{
        type:String,
        //required:[true,' Must HAve cover Image']
    },
    availability:{
        type:String,
        trim:true   
    },
    type:{
        type:String,
           
    },
    restro:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restro'
    }]
    //start dates of tour in diffrent dates collection like --feb,march ,april
});

//model
const FoodItem=mongoose.model('FoodItem',foodItemShema);

module.exports=FoodItem;