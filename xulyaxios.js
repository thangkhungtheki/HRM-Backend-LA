const axios = require('axios');
var replaceall = require("replaceall");
const fs = require('fs');

// URL ban đầu

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0', // Thay bằng User Agent của bạn
  'origin': 'https://animevietsub.art',
  'referer': 'https://animevietsub.art/',
  // 'Content-Type': 'application/x-www-form-urlencoded'
  // 'Cookie' : 'token619d1aa49fd625f592fdc70c0e132566=7a33cf57d662c94c3ad9169c6394fd6d; PHPSESSID=q8rs1okbpc4rg0jo19dqvin37c'
  // 'Accept': '*/*',
  // 'Accept-Encoding': 'gzip, deflate, br',
  // 'Connection': 'Connection'
  // Thêm các header khác nếu cần
};

const headerspost = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0', // Thay bằng User Agent của bạn
  'origin': 'https://animevietsub.art',
  'referer': 'https://animevietsub.art/',
  'Content-Type': 'application/x-www-form-urlencoded'
  // 'Cookie' : 'token619d1aa49fd625f592fdc70c0e132566=7a33cf57d662c94c3ad9169c6394fd6d; PHPSESSID=q8rs1okbpc4rg0jo19dqvin37c'
  // 'Accept': '*/*',
  // 'Accept-Encoding': 'gzip, deflate, br',
  // 'Connection': 'Connection'
  // Thêm các header khác nếu cần
};



function getLinklh3(uri) {
  // Sử dụng axios để lấy link redirect
  let uris = axios.get(uri, { headers: headers }, { maxRedirects: 0 })
    .then(response => {
      // Trích xuất URL redirect từ header "location"
      let uri = 'https://lh3.googleusercontent.com' + response.request['path']
      //console.log(uri)
      return uri
    })
    .catch(error => {
      console.error('Error:', error);
      return false
    });
  return uris
}

function xuly_file_m3u8(sotap, idfilm){
  let linkport1 = "https://animevietsub.art/ajax/player"
  const postData = {
    episodeId: sotap,
    backup: '1',
  };
  let _data = axios.post(linkport1, postData, {headers: headerspost})
  .then(res => {
    //
    //console.log(res.data.html)
    //let data = JSON.parse(res.data)
    let _aray = res.data.html.split('"')
    console.log('server DU: ', _aray[9])
    console.log('server FB: ', _aray[19])
    console.log('server HDX: ', _aray[29])
    //trả về mã hoá server DU - server dùng file lh3 png
    return _aray[9]
    //trả về mã hoá server FB - server của facebook 
    //return _aray[19]
    //trả về server HDX server free có kèm ADS
    //return _aray[19]
  })
  .catch(e=>{
    console.log(e)
  })
  return _data
}

function xuly_file_m3u82(link, id){
  let linkport1 = "https://animevietsub.art/ajax/player"
  const postData = {
    link: link,
    id: id,
  };
  let _data = axios.post(linkport1, postData, {headers: headerspost})
  .then(res => {
    
    
    //console.log(res.data)
    let _aray = res.data.link[0].file
    if (_aray){
      console.log(_aray)
      return _aray
    }else{
      console.log("không có link")
      return false
    }
    
  })
  .catch(e=>{
    console.log(e)
  })
  return _data
}

function doc_xuly_m3u8_new(link) {

  let uris = axios.get(link, { headers: headers }, { maxRedirects: 0 })
    .then(response => {
      //console.log(response.data)
      let data = response.data
      let urlendpoint = '//127.0.0.1:4000'
      if (data) {
        var _datanew = replaceall('//', urlendpoint + '/f?url=//', data)

        // Ghi ra file trên server backend
        // ---------------------------------------------
        // fs.writeFileSync('png/auto.m3u8', _datanew, 'utf-8', (err) => {
        //   if (err) {
        //     console.log('Lỗi ghi file !!!')
        //   } else {
        //     console.log('Đã lưu thành công !!!')
        //   }
        // })
        // ---------------------------------------------
      }

      //console.log(_datanew)
      //return "png/auto.m3u8"
      return  _datanew

    })
    .catch(error => {
      console.error('Error:', 'Lỗi ở đây 123');
      return false
    });
  return uris
}



//xuly_file_m3u8('92059', '4948')
//doc_xuly_m3u8_new('//storage.googleapiscdn.com/playlist/64965a7997759894592f8937/playlist.m3u8')
module.exports = {
  getLinklh3,
  xuly_file_m3u8,
  xuly_file_m3u82,
  doc_xuly_m3u8_new,
}