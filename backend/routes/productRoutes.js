const express = require('express')

const router = express.Router()

const getProducts = require("../controllers/productController")
// i.e /api/products
router.get("/", getProducts)

module.exports = router