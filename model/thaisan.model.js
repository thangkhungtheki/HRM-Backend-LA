const mongooge = require("mongoose")
const Schema = mongooge.Schema
const schema = new Schema({
    manv: {type: String, required: true},
    tungay: {type: String, required: false},
    denngay: {type: String, require: false},
    loainghi: {type: String, require: false}, 
    songayttbaohiem: {type: String, required: false},    
    thangbaohiem: {type: String, require: false},
    ngaysinhcon: {type: String, require: false},
})
module.exports = mongooge.model('thaisan', schema, 'thaisan')