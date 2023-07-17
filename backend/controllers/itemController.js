const Items=require('../models/itemsModel');
//Handling All User Request

    exports.getAllItems=async (req,res,next)=>{
        const Users=await Items.find()
        try{
            res.status(200).json({
                status:'Success',
                data:{
                    
                    Users
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



exports.insertItem=async(req,res)=>{
    try{
    const newItem=await Items.create(req.body);
      
        console.log(req.body);
        
    res.status(200).json({
        status:'success',
        data:{
            Item:newItem
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


exports.offItem = async (req, res) => {
    try {
      const itemId = req.params.id; //  item ID is passed in the URL parameter
  
      // Find the item by ID and update its availability
      const updatedItem = await Items.findOneAndUpdate(
        { _id: itemId },
        { availability: req.body.availability },
        { new: true } // To return the updated document
      );
  
      res.status(200).json({
        status: 'success',
        data: {
          item: updatedItem,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
  
  exports.deleteItem = async (req, res) => {
    try {
      const itemId = req.params.id; // Assuming the item ID is passed in the URL parameter
       console.log(itemId)
      // Delete the item by ID
      const deletedItem = await Items.findByIdAndRemove(itemId);
  
      if (!deletedItem) {
        return res.status(404).json({
          status: 'fail',
          message: 'Item not found',
        });
      }
  
      res.status(200).json({
        status: 'success',
        message: 'Item deleted successfully',
        data: null,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  };
  
    
//     exports.getItem=(req,res)=>{
//         try{

//         }
//         catch(err){
//         res.status(500).json({
//             status:'error',
//             message:'This GetUser route is not define yet '
//         });
//     }
//     }

//     exports.createUser=(req,res)=>{
//         try{

//         }
//         catch(err){
//             res.status(500).json({
//             status:'error',
//             message:'This Post route is not define Yet'
//         });
//     }
// }

//     exports.upDateUser=(req,res)=>{
//         try{

//         }
//         catch(err){
//         res.status(500).json({
//             status:'error',
//             message:'This route is not define Yet'
//         });
//     }
// }
//     exports.deleteUser=(req,res)=>{
//         try{

//         }
//         catch(err){
//         res.status(500).json({
//             status:'error',
//             message:'This route is not define Yet'
//         });
//     }
// }