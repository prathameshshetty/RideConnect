const captainController=require('../controllers/captain.controller');
const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const authMidlleware=require('../middlewares/auth.midlleware')

router.post('/register',[
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname:firstname').isLength({min:3}).withMessage("First name shoulbe atleast 3 characters long"),
    body("password").isLength({min:6}).withMessage("Password should be atleast 6 characters long "),
    body("vehicle.color").isLength({min:3}).withMessage("Color must be 3 chracters long "),
    body("vehicle.plate").isLength({min:3}).withMessage("palte must be atleast 3 charcters long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("Onvalid vehicle")
    ,
    captainController.registerCaptain
])


router.post('/login',[
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min:6}).withMessage("Password must be atleasast 6 chracters long")
],
captainController.loginCaptain)

router.get('/profile',authMidlleware.authCaptain,captainController.getCaptainProfile);

router.get('/logout',authMidlleware.authCaptain,captainController.logoutCaptain)
module.exports=router;