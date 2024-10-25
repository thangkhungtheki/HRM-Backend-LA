const dsnghiphep = require('../model/dsnghiphep.model')

async function doc_dsnghiphep(){
    let docs = await dsnghiphep.find()
    return docs
}

module.exports = {
    doc_dsnghiphep
}