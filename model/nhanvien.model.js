const mongooge = require("mongoose")
const Schema = mongooge.Schema
const schema = new Schema({
    manv: {type: String, required: true},
    tennv: {type: String, required: false},
    tenphongban: {type: String, require: false},
    ngayvaocty: {type: String, require: false}, 
    congchuan: {type: String, required: false},    
    nganhhang: {type: String, require: false},
    
})
module.exports = mongooge.model('nhanvien', schema, 'nhanvien')