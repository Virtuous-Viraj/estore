const express = require('express')

const router = express.Router()

const getUsers = require("../controllers/userController")
// i.e /api/products
router.get("/", getUsers)

module.exports = router