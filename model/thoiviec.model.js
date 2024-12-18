const mongooge = require("mongoose")
const Schema = mongooge.Schema
const schema = new Schema({
    manv: {type: String, required: true},
    ngaythoiviec: {type: String, required: false},
    ngayhieuluc: {type: String, require: false},
    loaithoiviec: {type: String, require: false}, 
    lydothoiviec: {type: String, required: false},    
})
module.exports = mongooge.model('thoiviec', schema, 'thoiviec')