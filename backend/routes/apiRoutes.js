const express = require('express')

const app = express()

const productRoutes =  require("./productRoutes")
// routes related to /products will be handled by productRoutes which is declared above
app.use("/products", productRoutes)

module.exports = app

// /products is 2nd part of url and /api is first so we have entire url /api/products and this is handled by
// product routes