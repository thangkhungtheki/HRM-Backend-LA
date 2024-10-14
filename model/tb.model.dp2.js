const mongooge = require("mongoose")
const Schema = mongooge.Schema

const schema = new Schema({
    Ma: {type: String, required: true},
    Mainboard: {type: String, required: false},
    RAM: {type: String, required: false},
    CPU: {type: String, required: false},
    HardDisk: {type: String, required: false},
    Monitor: {type: String, required: false},
    VideoCard: {type: String, required: false},
    OS: {type: String, required: false},
    Notes: {type: String, required: false},
    BoPhan: {type: String, required: false},
    DeXuat: {type: String, required: false},
    Loai: {type: String, required: false},
    Nguoidung: {type: String, required: false},
    Vitri: {type: String, required: false},
})


module.exports = mongooge.model('thietbidp2', schema, 'thietbidp2')