const nhanvien = require('../model/nhanvien.model')

async function doc_nhanvien(){
    let docs = await nhanvien.find()
    return docs
}
async function xoa_nhanvien(id){
    try{
        let docs = await nhanvien.findByIdAndDelete(id)
        return true
    }catch(e){
        return false
    }
   
    
}

module.exports = {
    doc_nhanvien,
    xoa_nhanvien
}