const User=require('../models/userModel');
const jwt=require('jsonwebtoken');
const {promisify}=require('util');
const signToken=id=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
}
  
exports.signup=async(req,res)=>{
    try{
    const newUser=await User.create(req.body);
       const token=signToken(newUser._id);
        console.log(req.body);
        console.log(token);
    res.status(201).json({
        status:'success',
        token,
        data:{
            user:newUser
        }
    });
}
catch(err)
{ 
    res.status(400).json({
        status:'Fail Data',
        message:err
    });
}
}
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
        return next(new Error('Please provide email and password!', 400));
    }

    try {
        // Check if user exists
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return next(new Error('Incorrect email or password', 401));
        }

        // Check if password is correct
        const correct = await user.correctPassword(password, user.password);
        if (!correct) {
            return next(new Error('Incorrect email or password', 401));
        }

        // If everything is ok, send token to the client
        const token = signToken(user._id);
        const role = user.role;
        res.status(200).json({
            email: email,
            status: 'success',
            token,
            role
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'An error occurred while processing your request.'
        });
    }
};

exports.protect=async(req,res,next)=>{
    //get the token chech if its exists
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token=req.headers.authorization.split(' ')[1];
    }
    console.log(token);
   
    if(!token)
    {
        return next(new Error('You are not log in ! please log in get access'));
    }
     //validate token varification
    
    const decoded=await promisify (jwt.verify)(token,process.env.JWT_SECRET)
    //console.log(decode);
        
    //check user exists 
    const freshuser= await User.findById(decoded.id);
    console.log('Fresh',freshuser);
    if(!freshuser)
    {
        return next(new Error('The user beloging to this user does no longer exist',401));
    }
    
       req.user=freshuser;
    next();

}

exports.restrictTo=(...roles)=>{
    return (req,res,next)=>{
        //roles ['admin','lead-guid']role='uuser'
        if(!roles.includes(req.user.role))
        {
            return next(new Error('You Do not have permission to perform this action',403));
        }
        next();
    }
}