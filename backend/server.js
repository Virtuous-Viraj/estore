const express = require('express')
const app = express()
const port = 3000


const apiRoutes = require("./routes/apiRoutes")

app.get('/', (req, res) => {
    console.log("synchronous code")/
    // throw new Error("Some error occred")
res.json({message:"API Running..."})
})


app.get('/a',(req, res,next)=>{
    // setTimeout(() => {
    //     console.log("Asynchronous code")
    //     next(new Error("Some error occured"))
    // }, 1000);
    setTimeout(() => {
        try {
            console.log("asynchronous code")
        } catch (error) {
            next(error)
        }        
    }, 1000);
    // res.send("Hello World")
    // next(new Error("error occured"))
})

// mongo connection
const connectDB = require("./config/db")
connectDB()

app.use('/api', apiRoutes)

app.use((error, req,res, next)=>{
    res.status(500).json({
        message : error.message,
        stack : error.stack
    })
})

app.listen(port, ()=>{
console.log(`Example app listening on port ${port}`)
})
