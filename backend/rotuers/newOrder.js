const express=require('express');
const router=express.Router();
const OrderController=require('../controllers/orderController')


router.get('/order',OrderController.getAllOrders)
router.post('/order',OrderController.insertOrder)
router.put('/order/:id',OrderController.statusAccept)

module.exports=router;