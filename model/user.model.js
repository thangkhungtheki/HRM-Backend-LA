const mongooge = require("mongoose")
const Schema = mongooge.Schema
const bcrypt = require("bcrypt")
const schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    role:{type: String, required: false}
})

schema.methods.enscryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}

schema.methods.validPassword =  (password, thispassword) => {
   
    //console.log(thispassword)
    
    return bcrypt.compareSync(password, thispassword)
}

module.exports = mongooge.model('User', schema)