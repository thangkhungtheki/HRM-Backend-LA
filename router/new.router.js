var express = require("express")
var router =  express.Router()

var chitietchamcong = require('../CRUD/chitietchamcong')
var nhanvien = require('../CRUD/nhanvien')
var dsnghiphep =  require('../CRUD/dsnghiphep')


router.get('/hr/laydsnhanvien', async (req, res)=>{
    let datanhanvien = await nhanvien.doc_nhanvien()
    res.send(datanhanvien)
})

router.post("/hr/xoanhanvien" , async (req, res) => {
    let id = req.body.id
    let datanhanvien = await nhanvien.xoa_nhanvien(id)
    res.send(datanhanvien)
})

module.exports = router