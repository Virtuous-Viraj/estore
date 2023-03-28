const express = require('express')

const app = express()

const productRoutes =  require("./productRoutes")
const categoryRoutes =  require("./categoryRoutes")
const userRoutes =  require("./userRoutes")
const orderRoutes =  require("./orderRoutes")
// routes related to /products will be handled by productRoutes which is declared above
app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)
app.use("/user", userRoutes)
app.use("/orders", orderRoutes)
// app.use("/admin", adminRoutes)
module.exports = app

// /products is 2nd part of url and /api is first so we have entire url /api/products and this is handled by
// product routes