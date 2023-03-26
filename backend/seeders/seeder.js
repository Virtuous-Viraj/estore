const { mongoose } = require("mongoose");

const connectDB = require("../config/db")
// connect to database
connectDB()
// seeder data
const categoryData = require("./categories")
const productData = require("./products")
const reviewData = require("./reviews")
const userData = require("./users")
const orderData = require("./orders")
// Model in which data will be inserted
const Category = require("../models/CategoryModel")
const Product = require("../models/ProductModel")
const Review = require("../models/ReviewModel")
const User = require("../models/UserModel")
const Order = require("../models/OrderModel")
// asynchronous function to insert the data into the model
const importData = async () =>{
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()
        // await Review.collection.dropIndexes()

        await Category.collection.deleteMany({}) // delete existing categories //not letting category table grow
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})

        await Category.insertMany(categoryData)
        const reviews = await Review.insertMany(reviewData)
        const sampleProducts = productData.map((product)=>{
            reviews.map((review)=>{
                product.reviews.push(review._id)
            })
            return {...product}
        })
        await Product.insertMany(sampleProducts)
        await User.insertMany(userData)
        await Order.insertMany(orderData)
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while processing seeder data", error)
        process.exit(1)
    }
}
// caling the function
importData()