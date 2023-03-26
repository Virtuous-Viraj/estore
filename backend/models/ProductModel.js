const mongoose = require("mongoose")
const {Schema} = mongoose
const Review = require("./ReviewModel")
const imageSchema = mongoose.Schema(
    {
        path : {
            type : String,
            required : true
        }
    }
)
const productSchema = new Schema({
    name :{
        type : String,
        required : true,
        unique : true
    },
    description :{
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    count : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    Rating : {
        type : Number,
    },
    sales : {
        type : Number,
        default : 0
    },
    attr : [
        {key : {type : String}, value : {type : String}}
    ],
    images : [imageSchema],
    reviews : [
        {
            // each review object is a reference to a Review model object. 
            // The "ref" field is set to the Review model.
            type : mongoose.Schema.Types.ObjectId,
            ref : Review,

        }
    ]

},{
    timestamps :true
})

productSchema.index()
const product = mongoose.model("Product", productSchema)

productSchema.index({name : "text", description : "text"}, {name : "TextIndex"})
// name is optional name for index group
// if we want to search based on description then we have to create a seperate indx for description field

// compound index in ascending order
productSchema.index({"attrs.key" :1, "attrs.value" : 1})
module.exports = product
