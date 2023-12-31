const express=require('express');
const authController=require('../controllers/authController')
const userController=require('../controllers/userController')

const router=express.Router();
router.post('/signup',authController.signup)
router.post('/login',authController.login)

//create User Routes
router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router.route('/:id')
.get(userController.getUser)
.patch(userController.upDateUser)
.delete(userController.deleteUser);

module.exports=router;