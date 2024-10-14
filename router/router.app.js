const express = require("express") 
const router =  express.Router()

const passport = require ("../passport/passport")
const jwt = require('jsonwebtoken')
const secret = "taolathangkhungtheki"
const jwtauth = require("./jwtAuthentica")

const xulyaxios = require('../xulyaxios')
const xulydb = require('../CRUD/xulydb')


router.get('/', (req, res)=> {
    setTimeout(()=>{
        return res.status(200).send('hello guy')
    },100)
    
})

router.post('/jwt', passport.authenticate('local.signin'), login)

router.get('/testauthen', jwtauth.authenticateToken , (req, res) => {
    return res.send('Đã đang nhập với token JWT')
})

function login(req, res) {
    // Tạo JWT với uid của user
    const userId = req.user.username;
    const expiresInMinute = 1 * 60 * 60 * 24 * 30
    const token = jwt.sign({ username: userId }, secret,{expiresIn: expiresInMinute})

    // Trả về cho client
    return res.json({
        user: req.user,
        token
    });
}

// function authenticateToken(req, res, next) {
//     // Lấy header 'Authorization' từ request
//     const authHeader = req.headers['authorization'];
//     // Kiểm tra xem header 'Authorization' có tồn tại và có đúng định dạng 'Bearer <token>' không
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token == null) {
//         // Nếu không tồn tại token, trả về lỗi 401 (Unauthorized)
//         return res.sendStatus(401);
//     }

//     // Xác thực token bằng cách sử dụng jwt.verify
//     jwt.verify(token, secret, (err, user) => {
//         if (err) {
//             // Nếu xác thực không thành công, trả về lỗi 403 (Forbidden)
//             return res.sendStatus(403);
//         }
//         // Nếu xác thực thành công, gán thông tin người dùng từ token vào request
//         req.user = user;
//         next(); // Tiếp tục tiến trình xử lý request
//     });
// }

router.get('/g',  async (req, res) => { // Queue parrams: 127.0.0.1:3000/g?idunique=...&idfilm=... 

    //  setTimeout(async() => {
        let idunique = req.query.idunique
        let idfilm = req.query.idfilm
    // console.log(idunique)
    // console.log(idfilm)
        let _html = await xulyaxios.xuly_file_m3u8(idunique, idfilm)
        let _linkm3u8 = await xulyaxios.xuly_file_m3u82(_html, idfilm)
        let _data_m3u8 = await xulyaxios.doc_xuly_m3u8_new(_linkm3u8)
    
    //console.log(_data_m3u8)
        res.set('Content-Disposition', 'attachment; filename="file.m3u8"');
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    // res.sendFile(__dirname + '\\png\\auto.m3u8') // return text ?
        res.send(_data_m3u8)
    //   }, 8000);

    // let idunique = req.query.idunique
    // let idfilm = req.query.idfilm
    // // console.log(idunique)
    // // console.log(idfilm)
    // let _html = await xulyaxios.xuly_file_m3u8(idunique, idfilm)
    // let _linkm3u8 = await xulyaxios.xuly_file_m3u82(_html, idfilm)
    // let _data_m3u8 = await xulyaxios.doc_xuly_m3u8_new(_linkm3u8)
    
    // //console.log(_data_m3u8)
    // res.set('Content-Disposition', 'attachment; filename="file.m3u8"');
    // res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    // // res.sendFile(__dirname + '\\png\\auto.m3u8') // return text ?
    // res.send(_data_m3u8)
})

router.get('/f', async (req, res) =>{
    const _link = req.query.url
    //console.log(_link)
    let rurl = await xulyaxios.getLinklh3(_link)
    res.redirect(rurl)
})

router.post('/update-password',jwtauth.authenticateToken,  async function (req, res, next) {
  const { username, newPassword } = req.body;
//   console.log(username)
//   console.log(newPassword)
  const result =  await xulydb.timuservaupdate(username,newPassword)
  res.json(result)
});

module.exports = router