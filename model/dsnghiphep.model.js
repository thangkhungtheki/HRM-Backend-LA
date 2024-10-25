const mongooge = require("mongoose")
const Schema = mongooge.Schema
const schema = new Schema({
    manv: {type: String, required: true},
    ngaydangky: {type: String, required: false},
    loainghi: {type: String, require: false},
    songaynghi: {type: String, require: false}, 
    thoigiannghi: {type: String, required: false},    
    dsnghinuangay: {type: String, require: false},
    lydonghi: {type: String, require: false},
    ghichu: {type: String, require: false},
    ngaythaotac: {type: String, require: false},
    tinhtrang: {type: String, require: false},
    nguoipheduyet: {type: String, require: false},
    nguoinhapho: {type: String, require: false},
})
module.exports = mongooge.model('dsnghiphep', schema, 'dsnghiphep')