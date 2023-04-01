const mongoose = require("mongoose")
const {Schema} = mongoose
const User = require("./UserModel")
// between user and orders there is one to many relationship
const orderSchema = mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : User
        },
        orderTotal : {
            itemsCount : {
                type : Number, required : true
            },
            cartSubtotal : {
                type : Number, required : true
            }
        },
        cartItems : [
            {
                name : {
                    type : String,
                    required : true
                },

                price : {
                    type : Number,
                    required : true
                },

                image : {
                    path : {
                        type : String, required : true
                     }
                },
                // number of products that a user wants to buy
                quantity : {
                    type : Number,
                    required : true
                },
                // total products inside cart
                count : {
                    type : Number,
                    required : true
                }
            }
        ],
        paymentMethod : {
            type : String,
            required : true,

        },
        transactionResult : {
            status : {type : String},
            createTime : {type : String},
            amount : { type : Number},

        },
        isPaid : {
            type : Boolean,
            required : true,
            default : false
        },
        paidAt : {
            type : Date
        },
        isDelivered : {
            type : Boolean,
            required : true,
            default : false
        }
    },
    {
        timestamps : true
    }
)

const Order = mongoose.model("Order", orderSchema)

module.exports = Order