const thoiviec = require('../model/thoiviec.model')

async function doc_thoiviec(){
    let docs = await thoiviec.find()
    return docs
}
async function xoa_thoiviec(id){
    try{
        let docs = await thoiviec.findByIdAndDelete(id)
        return true
    }catch(e){
        return false
    }
   
    
}

module.exports = {
    doc_thoiviec,
    xoa_thoiviec
}