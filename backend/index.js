const express=require('express');



const app=express();


const cors = require('cors');
app.use(cors());

app.use(express.json());
const foodItemRouter=require('./rotuers/itemRoutes');

const userRouter=require('./rotuers/userRoutes');
const newOrder = require('./rotuers/newOrder')




    //middleware for showing Json data 
   
    //middleware 2--
   
   
    app.use((req,res,next)=>{
        console.log('Hello From middleware');
        next();
    });
    //middleware 3----
    
    
    
    app.use((req,res,next)=>{
        req.requestTime=new Date().toISOString();
        next();
    });
    
    
    //routes
    app.use('/api/v1/users',userRouter);
    app.use('/api/v1/admin',foodItemRouter);
    app.use('/api/v1/item',newOrder);
    
     






















    app.all('*',(req,res,next)=>{
        const err=new Error(`can't find ${req.originalUrl} on the server!`);
        err.status='fail';
        err.satusCode=404;
        next(err);
    });
    app.use((err,req,res,next)=>
    {
        console.log(err.stack);
        err.satusCode=err.satusCode||500;
        err.status=err.status||'error'
        res.status(err.satusCode).json({
            status:err.status,
            message:err.message
        });
    });


//  const port=8081;
//  app.listen(port,()=>{console.log(`App Running On ${port}`)
//  });
    module.exports=app;







