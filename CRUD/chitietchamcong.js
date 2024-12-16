const chitietchamcong = require('../model/chitietchamcong.model')

async function doc_chitietchamcong(){
    let docs = await chitietchamcong.find()
    return docs
}

async function ghi_chitietchamcong(docx) {
    let doc = await chitietchamcong.insertMany(docx)
    return true
}

module.exports = {
    doc_chitietchamcong,
    ghi_chitietchamcong
}