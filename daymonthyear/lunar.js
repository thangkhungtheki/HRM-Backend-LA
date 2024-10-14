const _calendar = require("@nghiavuive/lunar_date_vi/dist/index.cjs");
// var ngayduong = {
//     day: 20, 
//     month: 7, 
//     year: 2024
// }
// var solar_date = new _calendar.SolarDate(ngayduong);
// //solar_date.setDate(new Date(2023, 1, 31))
// var lunar_date = solar_date.toLunarDate();

// console.log("Ngày âm: %d , tháng âm: %d ",lunar_date.day, lunar_date.month); // Mậu Ngọ
// console.log("Ngày dương: %d , tháng dương: %d ",solar_date.day, solar_date.month)

async function tinhngayam(day, month, year){
    // console.log(month + 1)
    // console.log(year)
    var ngayduong = {
    day: day, 
    month: month + 1, 
    year: year * 1
    }
    var solar_date = new _calendar.SolarDate(ngayduong);
//solar_date.setDate(new Date(2023, 1, 31))
    var lunar_date = solar_date.toLunarDate();
    return {
        day: lunar_date.day,
        month: lunar_date.month
    }
}
module.exports = {
    tinhngayam
}