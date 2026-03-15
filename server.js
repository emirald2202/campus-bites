const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
mongoose.connect("mongodb://127.0.0.1:27017/canteenDB")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

const orderSchema = new mongoose.Schema({
    email: String,
    dish: String,
    canteen: String,
    price: Number,
    time: String,
    orderId: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);
function genOtp() {
    return Math.floor(100000 + Math.random() * 900000);

}

let otpstore = {};



app.post("/signup", async (req, res) => {

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


});

app.post("/send-otp", (req, res) => {
    const { email } = req.body;
    const otp = genOtp();
    otpstore[email] = otp;
    console.log("OTP for", email, ":", otp);

    res.json({
        message: "OTP sent"
    });

});
app.post("/log-ver-otp", async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email: email });
    if (otpstore[email] == otp) {
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

});

app.post("/signup-ver-otp", (req, res) => {
    const { email, otp } = req.body;
    if (otpstore[email] == otp) {
        res.json({
            message: "OTP verified",


        });
    } else {
        res.json({
            message: "Invalid OTP"
        });

    }

});

app.post("/check-user", async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        res.json({ exists: true });
    }
    else {
        res.json({ exists: false });
    }

});

app.post("/login-password", async (req, res) => {

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

});

app.post("/place-order", async (req, res) => {

    const { email, dish, canteen, price, time } = req.body;
    console.log(req.body);

    const orderId = Math.floor(1000 + Math.random() * 9000);

    const newOrder = new Order({
        email,
        dish,
        canteen,
        price,
        time,
        orderId
    });

    await newOrder.save();

    res.json({
        message: "Order placed",
        orderId
    });

});

app.post("/my-orders", async (req, res) => {

    const {email} = req.body;
    console.log(email);

    const orders = await Order.find({ email: email }).sort({date: -1}).limit(3);

    res.json({
        orders

    });

});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});