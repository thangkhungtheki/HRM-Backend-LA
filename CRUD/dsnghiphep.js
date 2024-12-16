const dsnghiphep = require('../model/dsnghiphep.model')

async function doc_dsnghiphep(){
    let docs = await dsnghiphep.find()
    return docs
}
async function ghi_dsnghiphep(docx) {
    // await dsnghiphep.syncIndexes()
    // try{
    //     let doc = await dsnghiphep.insertMany(docx, { ordered: false })
    //     return true
    // }catch{
    //     return false
    // }
    const operations = docx.map(item => ({
        updateOne: {
            filter: { manv: item.manv, ngaydangky: item.ngaydangky },
            update: { $set: item },
            upsert: true // Chèn mới nếu không tìm thấy
        }
    }));

    dsnghiphep.bulkWrite(operations)
    .then(res => {
        console.log('Bulk operation thành công:', res);
    })
    .catch(err => {
        console.error('Lỗi:', err);
    });
    
}

module.exports = {
    doc_dsnghiphep,
    ghi_dsnghiphep
}