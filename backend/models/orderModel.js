const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
      user:{
        type:String
      },
     orderItems: [
        {
         
          name: { type: String },
          amount: { type: Number },
          price: { type: Number },
          image_url:{type:String}
          // Additional fields specific to each order item
        }
        
        
      ],
      shippingAddress: {
        street: { type: String },
        Door: { type: String },
        City: { type: String },
        Pin: { type: String },
        deliveryType: { type: String },
      },
    
      
      
      status:{
        type:String
      },
      totalAmount:{
        type:String
      },
      payment:{
        type:String
      },
      orderDateTime: {
        type: Date,
        default: Date.now
      }
      
    }
    
  );
  
  module.exports = mongoose.model("Order", orderSchema);