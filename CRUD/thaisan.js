const thaisan = require('../model/thaisan.model')

async function doc_thaisan(){
    let docs = await thaisan.find()
    return docs
}
async function xoa_thaisan(id){
    try{
        let docs = await thaisan.findByIdAndDelete(id)
        return true
    }catch(e){
        return false
    }
   
    
}

module.exports = {
    doc_thaisan,
    xoa_thaisan
}