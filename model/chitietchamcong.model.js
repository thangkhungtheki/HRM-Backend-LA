const mongooge = require("mongoose")
const Schema = mongooge.Schema
const schema = new Schema({
    manv: {type: String, required: true},
    ngay: {type: String, required: false},
    thu: {type: String, require: false},
    vao1: {type: String, require: false}, 
    ra1: {type: String, required: false},
    vao2: {type: String, require: false}, 
    ra2: {type: String, required: false},   
    vao3: {type: String, require: false}, 
    ra3: {type: String, required: false},  
    cong: {type: String, required: false},  
    gio: {type: String, require: false},   
    vaotre: {type: String, require: false}, 
    rasom: {type: String, require: false},  
    tc1: {type: String, require: false},
    tc2: {type: String, require: false},
    tc3: {type: String, require: false},
    tenca: {type: String, require: false},
    kyhieu: {type: String, require: false},
    tonggio: {type: String, require: false},
})
module.exports = mongooge.model('chitietchamcong', schema, 'chitietchamcong')