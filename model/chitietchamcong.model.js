const mongooge = require("mongoose")
const Schema = mongooge.Schema
const schema = new Schema({
    manv: {type: String, required: true},
    ngay: {type: String, required: false},
    thu: {type: String, require: false},
    vao: {type: String, require: false}, 
    ra: {type: String, required: false},    
    tenca: {type: String, require: false},
    kyhieu: {type: String, require: false},
    tonggio: {type: String, require: false},
    cadem: {type: String, require: false},
    gio: {type: String, require: false},
    cong: {type: String, require: false},
    vaotre: {type: String, require: false},
    rasom: {type: String, require: false},
})
module.exports = mongooge.model('chitietchamcong', schema, 'chitietchamcong')