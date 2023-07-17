const express=require('express');

const itemController=require('../controllers/itemController')

const router=express.Router();
router.get('/items',itemController.getAllItems)
router.post('/items',itemController.insertItem)
router.put('/items/:id',itemController.offItem)
router.put('/items/off/:id',itemController.offItem)
router.delete('/items/remove/:id',itemController.deleteItem)




module.exports=router;