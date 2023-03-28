const express = require('express')

const router = express.Router()

const getOrders = require("../controllers/orderController")
// i.e /api/products
router.get("/", getOrders)

module.exports = router