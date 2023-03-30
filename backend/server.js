const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const cookieParser = require ('cookie-parser')
const port = 3000
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())
// const Product = require("./models/ProductModel")
const apiRoutes = require("./routes/apiRoutes")

app.get('/',async (req, res,next) => {

    try {
        const product = new Product
        product.name = "New Product Name"
        const ProductSave = await product.save()
        console.log(ProductSave === product)
        const products = await Product.find()
        console.log(products.length)
        res.send("Product Created" + product._id)
    } catch (error) {
        next(error)
    }
    // console.log("synchronous code")/
    // throw new Error("Some error occred")
// res.json({message:"API Running..."})
})

// take a look at simple database opearation



// app.get('/a',(req, res,next)=>{
//     // setTimeout(() => {
//     //     console.log("Asynchronous code")
//     //     next(new Error("Some error occured"))
//     // }, 1000);
//     setTimeout(() => {
//         try {
//             console.log("asynchronous code")
//         } catch (error) {
//             next(error)
//         }        
//     }, 1000);
//     // res.send("Hello World")
//     // next(new Error("error occured"))
// })

// mongo connection
const connectDB = require("./config/db")
connectDB()

app.use('/api', apiRoutes)

app.use((error, req, res, next)=>{
    console.error(error)
    next(error)
})
app.use((error, req,res, next)=>{
    res.status(500).json({
        message : error.message,
        stack : error.stack
    })
})

app.listen(port, ()=>{
console.log(`Example app listening on port ${port}`)
})
