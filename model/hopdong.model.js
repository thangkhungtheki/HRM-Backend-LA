const mongooge = require("mongoose")
const Schema = mongooge.Schema
const schema = new Schema({
    tenhopdong: {type: String, required: true},
    ngaybatdau: {type: String, required: false},
    // timehethan: {type: String, required: false},   //step bước số ngày từ này bắt đầu và ngày kết thúc (để dành lặp lại)
    ngayketthuc: {type: String, require: false},
       
    
    songayhethan: {type: String, require: false}, //được add vào mỗi lần gọi yc gửi api sendmail
    ghichu: {type: String, required: false},    
    hoanthanh: {type: String, require: false},
    // flagguimail: {type: String, require: false},
})


module.exports = mongooge.model('theodoihopdong', schema, 'theodoihopdong')