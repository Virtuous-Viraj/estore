const Product = require("../models/ProductModel")

const getProducts = (req, res) =>{
    Product.create({name : "Panasonic"})
    res.send("Hadling products routes, e.g serch for products")
}

module.exports = getProducts