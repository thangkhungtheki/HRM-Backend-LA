const chitietchamcong = require('../model/chitietchamcong.model')

async function doc_chitietchamcong(){
    let docs = await chitietchamcong.find()
    return docs
}

module.exports = {
    doc_chitietchamcong
}