const User = require("../models/UserModel")
const { hashPasswords, comparePasswords } = require("../utils/hashPasswords")

const generateAuthToken = require("../utils/generateAuthToken")

const getUsers = async(req, res, next) =>{
    try {
        const users = await User.find({}).select("-password").orFail()
        res.send(users)
    } catch (error) {
        next(error)
    }
}

const registerUser = async(req, res, next) =>{
        try {
            const {name, lastname, email, password} = req.body
            if(!(name && lastname && email && password)) return res.status(400).send("All inputs are required")

            const userExists = await User.findOne({email})
            if(userExists)
            {
                return res.status(400).json({error : "User already exists"})
            }
            else{
                const hash = hashPasswords(password)
                const user = await User.create({
                    name, lastname, email : email.toLowerCase(),
                    password : hash
                })
                res
                .cookie("access_token", generateAuthToken(user._id, user.name, user.lastname, user.email, user.isAdmin), {
                    httpOnly : true,
                    secure : process.env.NODE_ENV === "production",
                    sameSite : "strict"
                })
                .status(201).json({success : "User Created", userCreated :{
                    _id : user._id,
                    name : user.name,
                    lastname : user.lastname,
                    email : user.email,
                    isAdmin : user.isAdmin
                } })
            }

        } catch (error) {
            next(error)
        }
}

const loginUser = async( req, res, next) =>{
    try {
        const {email, password, doNotLogout} = req.body
        if(!(email && password )) return res.status(400).send("All inputs are required")
        const user = await User.findOne({email})
        if(user && comparePasswords(password, user.password))
        {
            //compare passwords

             let cookieParams = {
                httpOnly : true,
                secure : process.env.NODE_ENV === "production",
                sameSite : "strict"
             }

             if(doNotLogout)
             {
                cookieParams = {...cookieParams, maxAge : 1000 * 60 * 60 * 24 * 7}
                // 1000=1ms
             }
            //  3 arguments
             return res.cookie("access_token", generateAuthToken(user._id, user.name, user.lastname, user.email, user.isAdmin), cookieParams)
             .json({
                success : "user logged in",
                userLoggedIn : {
                    _id : user._id, 
                    name : user.name,
                    lastname : user.lastname,
                    email : user.email,
                    isAdmin : user.isAdmin,
                    doNotLogout
                }
             })
        }
        else{
            return res.status(401).send("Wrong Credentials")
        }
    } catch (error) {
        next(error)
    }y
}

module.exports = {getUsers, registerUser, loginUser}