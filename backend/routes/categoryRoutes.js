const express = require('express')

const router = express.Router()
// import required functions from categoryController
const {getCategories, newCategory, deleteCategory, saveAttr} = require("../controllers/categoryController")
// i.e /api/products

const {verifyIsLoggedIn, verifyIsAdmin} = require("../middlewares/verifyAuthToken")

router.get("/", getCategories)
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attr", saveAttr)
module.exports = router