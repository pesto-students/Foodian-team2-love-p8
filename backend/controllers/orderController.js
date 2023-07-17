const Orders =require('../models/orderModel');



exports.getAllOrders=async (req,res,next)=>{
    const Order=await Orders.find()
    try{
        res.status(200).json({
            status:'Success',
            data:{
                
                Order

            }
        });
    }
    catch(err){
    res.status(500).json({
        status:'error',
        message:'THIS GetAll User Route Yet Not Define'
    });
}
}


exports.insertOrder=async(req,res)=>{
    try{
        console.log(req.body);
    const newItem=await Orders.create(req.body);
      
        
        
    res.status(200).json({
        status:'success',
        data:{
            Order:newItem
        }
    });
}
catch(err)
{ 
    console.log(err)
    res.status(400).json({
        status:'Fail Data',
        message:err
    });
}
}



exports.statusAccept = async(req, res) => {
    const orderId = req.params.id;
    const { status } = req.body;
  
    // Your logic to update the order status in the database
   
    Orders.findByIdAndUpdate(orderId, { status }, { new: true })
      .then((updatedOrder) => {
        if (!updatedOrder) {
          return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ message: 'Order status updated successfully', order: updatedOrder });
      })
      .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    )}
    