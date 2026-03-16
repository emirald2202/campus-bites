const Order = require("../models/Order");

const placeOrder = async (req, res) => {
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
};

const myOrders = async (req, res) => {
    const { email } = req.body;
    console.log(email);

    const orders = await Order.find({ email: email }).sort({ date: -1 }).limit(3);

    res.json({
        orders
    });
};

module.exports = {
    placeOrder,
    myOrders
};
