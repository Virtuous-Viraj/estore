const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)
const hashPasswords = (password) =>{
    return bcrypt.hashSync(password, salt)
}

const comparePasswords = (inputPassword, hashedPassword) => {
    return bcrypt.compareSync(inputPassword, hashedPassword)
}

module.exports = {hashPasswords, comparePasswords}