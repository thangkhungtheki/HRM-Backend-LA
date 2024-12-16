var express = require("express")
var router =  express.Router()

var chitietchamcong = require('../CRUD/chitietchamcong')
var nhanvien = require('../CRUD/nhanvien')
var dsnghiphep =  require('../CRUD/dsnghiphep')

const multer = require('multer');
const path = require('path');
const exceljs = require('exceljs')
// Cấu hình lưu trữ file
// Cấu hình Multer để lưu file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

// Tạo thư mục nếu chưa tồn tại
const fs = require('fs');
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const upload = multer({ storage });


router.get('/hr/laydsnhanvien', async (req, res)=>{
    let datanhanvien = await nhanvien.doc_nhanvien()
    res.send(datanhanvien)
})

router.post("/hr/xoanhanvien" , async (req, res) => {
    let id = req.body.id
    let datanhanvien = await nhanvien.xoa_nhanvien(id)
    res.send(datanhanvien)
})

router.post('/uploadchamcong', upload.single('file'), async(req, res) => {
  try {
    res.status(200).json({
      message: 'Upload thành công!',
      file: req.file,
    });
    console.log(req.file.path)
   
    // Đọc file Excel
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(req.file.path);
    const worksheet = workbook.worksheets[0]; // Lấy sheet đầu tiên

    // Duyệt qua từng dòng trong file Excel (bắt đầu từ dòng 2 nếu có header)
    const rows = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 3) { // Bỏ qua tiêu đề (dòng 1)
        rows.push({
          manv: row.getCell(1).value, // Lấy cột 1
          ngay: row.getCell(5).value,  // Lấy cột 2
          thu: row.getCell(6).value, // Lấy cột 3
          vao1: row.getCell(7).value,
          ra1: row.getCell(8).value,
          vao2: row.getCell(9).value,
          ra2: row.getCell(10).value,
          vao3: row.getCell(11).value,
          ra3: row.getCell(12).value,
          cong: row.getCell(13).value,
          gio: row.getCell(14).value,
          vaotre: row.getCell(15).value,
          rasom: row.getCell(16).value,
          tc1: row.getCell(17).value,
          tc2: row.getCell(18).value,
          tc3: row.getCell(19).value,
          tenca: row.getCell(20).value,
          kyhieu: row.getCell(21).value,
          tonggio: row.getCell(22).value,
        });
      }
    });
    let result = await chitietchamcong.ghi_chitietchamcong(rows)
    console.log(rows.length)
   
  } catch (error) {
    res.status(500).json({ message: 'Upload thất bại!', error });
  }
});

router.post('/uploaddanhsachnghi', upload.single('file'), async (req, res) => {
    try {
        console.log(req.file.path)
        // Đọc file Excel
        // const workbook = new exceljs.Workbook();
        // workbook.xlsx.readFile(req.file.path);
        // const worksheets = workbook.worksheets[0]; // Lấy sheet đầu tiên

        // // Duyệt qua từng dòng trong file Excel (bắt đầu từ dòng 2 nếu có header)
        // const rows = [];
        // worksheets.eachRow((row, rowNumber) => {
        // if (rowNumber > 5) { // Bỏ qua tiêu đề (dòng 1)
        //     rows.push({
        //     manv: row.getCell(2).value, // Lấy cột 2
        //     ngaydangky: row.getCell(15).value,  // Lấy cột 2
        //     loainghi: row.getCell(16).value, // Lấy cột 3
        //     thoigiannghi: row.getCell(17).value,
        //     songaynghi: row.getCell(18).value,
        //     dsnghinuangay: row.getCell(19).value,
        //     lydonghi: row.getCell(20).value,
        //     ghichu: row.getCell(21).value,
        //     ngaythaotac: row.getCell(22).value,
        //     tinhtrang: row.getCell(23).value,
        //     nguoipheduyet: row.getCell(24).value,
        //     nguoinhapho: row.getCell(25).value,
            
        //     });
        // }
        // });
        // let result = dsnghiphep.ghi_dsnghiphep(rows)
        // console.log(rows.length)
        var workexcel = new exceljs.Workbook()
        await workexcel.xlsx.readFile(req.file.path)
        var worksheet = workexcel.worksheets[0]
        const araydsnghi = []
        worksheet.eachRow((row, rownumber)=> {
            if (rownumber > 6 && row.getCell(2).value) { 
                araydsnghi.push({
                manv: row.getCell(2).value, 
                ngaydangky: row.getCell(15).value,  
                loainghi: row.getCell(16).value, 
                thoigiannghi: row.getCell(17).value,
                songaynghi: row.getCell(18).value,
                dsnghinuangay: row.getCell(19).value,
                lydonghi: row.getCell(20).value,
                ghichu: row.getCell(21).value,
                ngaythaotac: row.getCell(22).value,
                tinhtrang: row.getCell(23).value,
                nguoipheduyet: row.getCell(24).value,
                nguoinhapho: row.getCell(25).value,
            })
            }
            
        })
        let result = dsnghiphep.ghi_dsnghiphep(araydsnghi)
        console.log(araydsnghi.length)
        return res.status(200).json({ message: 'File Excel đã được xử lý thành công!' });
    
    } catch (error) {
        res.status(500).json({ message: 'Upload thất bại!', error });
    }
})

module.exports = router