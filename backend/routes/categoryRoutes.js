const express = require('express')

const router = express.Router()
// import required functions from categoryController
const {getCategories, newCategory, deleteCategory} = require("../controllers/categoryController")
// i.e /api/products
router.get("/", getCategories)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
module.exports = router