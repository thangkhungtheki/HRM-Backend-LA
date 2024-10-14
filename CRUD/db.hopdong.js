const _hopdong = require('../model/hopdong.model')

async function doc_hopdong(){
    let docs = await _hopdong.find()
    return docs
}


async function tao_hopdong(doc){
    try{
        // console.log(doc)
        await _hopdong.create(doc)
        return true
    }catch(e){
        return false
    }
}

async function update_hopdong(id, doc){
    
    try{
        await _hopdong.findByIdAndUpdate(id, doc)
        return true
    }catch(e){
        return false
    }
}

async function delete_hopdong (id){
    try {
        await _hopdong.findByIdAndDelete(id)
    } catch (e) {
        
    }
}

async function timhopdongtheoID(id){
    try {
        let doc = await _hopdong.findById(id)
        // console.log(doc)
        return doc
    } catch (e) {
        return false
    }
}

module.exports = {
    doc_hopdong,
    tao_hopdong,
    update_hopdong,
    delete_hopdong,
    timhopdongtheoID,
    
}