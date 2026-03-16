const express = require("express");
const { 
    signup, 
    sendOtp, 
    logVerOtp, 
    signupVerOtp, 
    checkUser, 
    loginPassword 
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/send-otp", sendOtp);
router.post("/log-ver-otp", logVerOtp);
router.post("/signup-ver-otp", signupVerOtp);
router.post("/check-user", checkUser);
router.post("/login-password", loginPassword);

module.exports = router;
