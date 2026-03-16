const User = require("../models/User");
const otpService = require("../services/otpService");

const signup = async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password
    });

    await newUser.save();
    console.log(name, email, password);

    res.json({
        message: "Signup successful"
    });
};

const sendOtp = (req, res) => {
    const { email } = req.body;
    const otp = otpService.genOtp();
    otpService.saveOtp(email, otp);
    console.log("OTP for", email, ":", otp);

    res.json({
        message: "OTP sent"
    });
};

const logVerOtp = async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email: email });
    
    if (otpService.verifyOtp(email, otp)) {
        res.json({
            message: "OTP verified",
            name: user.name,
            email: user.email
        });
    } else {
        res.json({
            message: "Invalid OTP"
        });
    }
};

const signupVerOtp = (req, res) => {
    const { email, otp } = req.body;
    if (otpService.verifyOtp(email, otp)) {
        res.json({
            message: "OTP verified"
        });
    } else {
        res.json({
            message: "Invalid OTP"
        });
    }
};

const checkUser = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        res.json({ exists: true });
    } else {
        res.json({ exists: false });
    }
};

const loginPassword = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.json({ message: "User not found" });
    }

    if (user.password !== password) {
        return res.json({ message: "Incorrect password" });
    }

    res.json({
        message: "Login successful",
        name: user.name,
        email: user.email
    });
};

module.exports = {
    signup,
    sendOtp,
    logVerOtp,
    signupVerOtp,
    checkUser,
    loginPassword
};
