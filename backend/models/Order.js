const mongoose = require("mongoose");

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

module.exports = mongoose.model("Order", orderSchema);
