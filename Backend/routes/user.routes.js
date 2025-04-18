const express=require("express");
const router=express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.controller')
const authMidlleware=require('../middlewares/auth.midlleware');

router.post('/register',[
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 charcaters long'),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 charcaters long")
], userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min:6}).withMessage("Invalid password")
], userController.loginUser)


router.get('/profile',authMidlleware.authUser,userController.getUserProfile)

router.get('/logout',authMidlleware.authUser,userController.logoutUser);
module.exports=router;