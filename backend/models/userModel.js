
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const validator=require('validator');
//name emial photo password passwordconfir


const userSchema=new mongoose.Schema({
    name:{
        type:String,
       // required:[true,'please tell us your name']
    },
    lastName:{
        type:String,
        //required:[true,'please tell us Your Last Name']
    },
    phone:{
        type:Number,
        //required:[true,'Please tell us Mobile Number']
    },
    email:{
        type:String,
        //required:[true,'plaese provide emial'],
        unique:true,
        lowercase:true 
    },
        role:{
            type:String,
            enum:['user','admin','deliveryPerson'],
            default:'user'
    },
    password:{
        type:String,
      //  required:[true,'Please Provide a password'],
        minlength:8,
        select:false
    },
    passwordConfirm:{
        type:String,
        //required:[true,'Please Confirm Your Password'],
        validate:{
        validator:function(el){
            return el===this.password;
        },
        message:'Password are not the same!'
    }
},
    passwordChangedAt:Date
});
//pre save middleware
userSchema.pre('save',async function(next){
    //Only run this function if password is modified 
    if(!this.isModified('password')) return next();

    //hash the password with cost of 12
    this.password= await bcrypt.hash(this.password,12);
    this.passwordConfirm=undefined;
    next();

});

userSchema.methods.correctPassword= async function(candidatePassword,userPassword){
return await bcrypt.compare(candidatePassword,userPassword);
}

userSchema.method.changedPasswordAfter=function(JWTTimestamp){
    if(this.passwordChangedAt){
        const changedTimeStamp=parseInt(this.passwordChangedAt.getTime()/1000,10);
        console.log(this.passwordChangedAt,JWTTimestamp);
        return JWTTimestamp<changedTimeStamp;
    }
    return false;
    //false means password is not changed 
}
const User=mongoose.model('User',userSchema);
module.exports=User;