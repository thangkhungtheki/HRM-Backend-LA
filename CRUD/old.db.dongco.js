const _dongco = require('../model/dongco.model')

async function doc_dongco(){
    let docs = await _dongco.find()
    return docs
}

async function loai_dongco(loai){
    let docs = await _dongco.find({loai: loai})
    return docs
}

async function tao_dongco(doc){
    try{
        // console.log(doc)
        await _dongco.create(doc)
        return true
    }catch(e){
        return false
    }
}

async function update_dongco(id, doc){
    
    try{
        await _dongco.findByIdAndUpdate(id, doc)
        return true
    }catch(e){
        return false
    }
}

async function delete_dongco (id){
    try {
        await _dongco.findByIdAndDelete(id)
    } catch (e) {
        
    }
}

async function timdongcotheoID(id){
    try {
        let doc = await _dongco.findById(id)
        // console.log(doc)
        return doc
    } catch (e) {
        return false
    }
}

module.exports = {
    doc_dongco,
    tao_dongco,
    update_dongco,
    delete_dongco,
    timdongcotheoID,
    loai_dongco
}