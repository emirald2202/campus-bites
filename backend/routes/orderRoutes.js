const express = require("express");
const { placeOrder, myOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/place-order", placeOrder);
router.post("/my-orders", myOrders);

module.exports = router;
