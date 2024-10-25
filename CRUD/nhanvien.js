const nhanvien = require('../model/nhanvien.model')

async function doc_nhanvien(){
    let docs = await nhanvien.find()
    return docs
}

module.exports = {
    doc_nhanvien
}