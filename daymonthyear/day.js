const lunar = require('../daymonthyear/lunar')

async function  getWeeksStartAndEndInMonth(month, year, _start) {
    // let monthNames = ["January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    //     ],
    //     d = new Date();
    //     console.log("The current month is " + monthNames[d.getMonth()]);
    const xmonth = month
    const xyear = year
    // console.log(xyear)
    let weeks = [],
        firstDate = new Date(year, month , 1),
        lastDate = new Date(year, month + 1 , 0),
        numDays = lastDate.getDate();
    var c = Date()

    let start = 1;
    let end = 7 - firstDate.getDay();
    if (_start == 'monday') {
        if (firstDate.getDay() === 0) {
            end = 1;
        } else {
            end = 7 - firstDate.getDay() + 1;
        }
    }
    while (start <= numDays) {
        var businessWeekEnd = end
        if(businessWeekEnd > 0){
            if(businessWeekEnd > start){
                if((businessWeekEnd - start) === 6){
                    weeks.push(
                        {
                            thu: "T2",
                            ngay: start
                        },
                        {
                            thu: "T3",
                            ngay: start + 1
                        },

                        {
                            thu: 'T4',
                            ngay: start + 2
                        },
                        {
                            thu: 'T5',
                            ngay: start + 3
                        },
                        {
                            thu: 'T6',
                            ngay: start + 4
                        },
                        {
                            thu: 'T7',
                            ngay: start + 5
                        },
                        {
                            thu: 'CN',
                            ngay: businessWeekEnd
                        }
                        
                )
                }else{
                    if(weeks.length === 0){
                        let step = businessWeekEnd - start
                        switch(step) {
                            case 0:
                            weeks.push(
                                {
                                    thu: 'CN',
                                    ngay: businessWeekEnd
                                })
                            break;
                            case 1:

                            weeks.push(
                            {
                                thu: 'T7',
                                ngay: start
                            },
                            {
                                thu: 'CN',
                                ngay: businessWeekEnd
                            })
                            break;
                            case 2:

                            weeks.push(
                                {
                                    thu: 'T6',
                                    ngay: start
                                },
                                {
                                    thu: 'T7',
                                    ngay: start + 1
                                },
                                {
                                    thu: 'CN',
                                    ngay: businessWeekEnd
                                }
                            )
                                break;
                            case 3:

                            weeks.push(
                                {
                                    thu: 'T5',
                                    ngay: start
                                },
                                {
                                    thu: 'T6',
                                    ngay: start + 1
                                },
                                {
                                    thu: 'T7',
                                    ngay: start + 2
                                },
                                {
                                    thu: 'CN',
                                    ngay: businessWeekEnd
                                }
                            )
                            break;
                            case 4:

                            weeks.push(
                                {
                                    thu: 'T4',
                                    ngay: start
                                },
                                {
                                    thu: 'T5',
                                    ngay: start + 1
                                },
                                {
                                    thu: 'T6',
                                    ngay: start + 2
                                },
                                {
                                    thu: 'T7',
                                    ngay: start + 3
                                },
                                {
                                    thu: 'CN',
                                    ngay: businessWeekEnd
                                }
                            )
                            break;
                            case 5:

                            weeks.push(
                                {
                                    thu: "T3",
                                    ngay: start 
                                },

                                {
                                    thu: 'T4',
                                    ngay: start + 1
                                },
                                {
                                    thu: 'T5',
                                    ngay: start + 2
                                },
                                {
                                    thu: 'T6',
                                    ngay: start + 3
                                },
                                {
                                    thu: 'T7',
                                    ngay: start + 4
                                },
                                {
                                    thu: 'CN',
                                    ngay: businessWeekEnd
                                }
                            )
                            break;
                            default:
                            console.log("loi gi đó")
                            
                        }
                    }else{
                        let step = businessWeekEnd - start
                        switch(step) {
                            case 0:

                            weeks.push(
                                {
                                    thu: "T2",
                                    ngay: start
                                },
                            )
                            break;
                            case 1:

                            weeks.push(
                                {
                                    thu: "T2",
                                    ngay: start
                                },
                                {
                                    thu: "T3",
                                    ngay: businessWeekEnd
                                },
                            )
                            break;
                            case 2:

                            weeks.push(
                            {
                                thu: "T2",
                                ngay: start
                            },
                            {
                                thu: "T3",
                                ngay: start + 1
                            },

                            {
                                thu: 'T4',
                                ngay: businessWeekEnd
                            },    
                            )
                                break;
                            case 3:
                            // code block
                            // weeks.push({
                            //     2: start,
                            //     3: start + 1,
                            //     4: start + 2 ,
                            //     5: businessWeekEnd,
                            //     // 6: 0,
                            //     // 7: 0
                            //     })
                            weeks.push(
                                {
                                    thu: "T2",
                                    ngay: start
                                },
                                {
                                    thu: "T3",
                                    ngay: start + 1
                                },

                                {
                                    thu: 'T4',
                                    ngay: start + 2
                                },
                                {
                                    thu: 'T5',
                                    ngay: businessWeekEnd
                                },
                            )
                            break;
                            case 4:
                            // code block
                            // weeks.push({
                            //     2: start,
                            //     3: start + 1,
                            //     4: start + 2 ,
                            //     5: start + 3,
                            //     6: businessWeekEnd,
                            //     // 7: 0
                            //     })
                            weeks.push(
                                {
                                    thu: "T2",
                                    ngay: start
                                },
                                {
                                    thu: "T3",
                                    ngay: start + 1
                                },

                                {
                                    thu: 'T4',
                                    ngay: start + 2
                                },
                                {
                                    thu: 'T5',
                                    ngay: start + 3
                                },
                                {
                                    thu: 'T6',
                                    ngay: businessWeekEnd
                                },
                            )
                            break;
                        
                            case 5:
                            // code block
                            // weeks.push({
                            //     2: start,
                            //     3: start + 1,
                            //     4: start + 2 ,
                            //     5: start + 3,
                            //     6: start + 4,
                            //     7: businessWeekEnd
                            //     })
                            weeks.push(
                            {
                                thu: "T2",
                                ngay: start
                            },
                            {
                                thu: "T3",
                                ngay: start + 1
                            },

                            {
                                thu: 'T4',
                                ngay: start + 2
                            },
                            {
                                thu: 'T5',
                                ngay: start + 3
                            },
                            {
                                thu: 'T6',
                                ngay: start + 4
                            },
                            {
                                thu: 'T7',
                                ngay: businessWeekEnd
                            },
                            )
                            break;
                            default:
                            console.log("loi gi đó")
                            
                        }
                    }
                    
                }
                // weeks.push({
                //     thu: 'CN', 
                //     end: businessWeekEnd
                // });
            }
            else{
                //Check for last day else end date is within 5 days of the week.
                // weeks.push({start: start, end: end});
                
                if(start== 1){
                    // console.log('start: %d - end: %d - businessWeekEnd: %d', start, end, businessWeekEnd)
                
                    weeks.push({
                        thu: 'CN', 
                        ngay: businessWeekEnd
                    });
                }
                else{
                    // console.log('start: %d - end: %d - businessWeekEnd: %d', start, end, businessWeekEnd)
                
                    weeks.push({
                        thu: 'T2', 
                        ngay: end
                    });
                }
                
            }
        }
        start = end + 1;
        end = end + 7;
        end = start === 1 && end === 8 ? 1 : end;
        if (end > numDays) {
            end = numDays;
        }
    }

    // return weeks;
    weeks.forEach(async(item,index) => {
        let ngayam = await lunar.tinhngayam(item.ngay, xmonth, xyear)
        item.am = ngayam.day
        item.amthang = ngayam.month
        if(index == 15){
            item.thongtin = {
                sang: {
                    dp1: {
                        soban : index + 70,
                        loaitiec : 'cuoi',
                        sanh : 'dp1',
                        buoi : 'sang'
                    },
                    dp2: {
                        soban : index + 18,
                        loaitiec : 'cuoi',
                        sanh : 'dp2',
                        buoi : 'sang'
                    },
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                chieu: {
                    dp1: {},
                    dp2: {},
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                out: {
                    soban : index + 18,
                    loaitiec : 'out',
                    sanh : 'out',
                    buoi : 'sang'
                }
            }
        }else if(index == 5){
            item.thongtin = {
                sang: {
                    dp1: {
                        soban : index + 70,
                        loaitiec : 'cuoi',
                        sanh : 'dp1',
                        buoi : 'sang'
                    },
                    dp2: {
                        soban : index + 18,
                        loaitiec : 'cuoi',
                        sanh : 'dp2',
                        buoi : 'sang'
                    },
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                chieu: {
                    dp1: {},
                    dp2: {},
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                out: {
                    soban : index + 18,
                    loaitiec : 'out',
                    sanh : 'out',
                    buoi : 'chieu'
                }
            }
        }else if(index == 10){
            item.thongtin = {
                sang: {
                    dp1: {
                        soban : index + 70,
                        loaitiec : 'cuoi',
                        sanh : 'dp1',
                        buoi : 'sang'
                    },
                    dp2: {
                        soban : index + 18,
                        loaitiec : 'cuoi',
                        sanh : 'dp2',
                        buoi : 'sang'
                    },
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{},
                    grb:{
                        soban : index + 188,
                        loaitiec : 'cuoi',
                        sanh : 'grb',
                        buoi : 'sang'
                    }
                },
                chieu: {
                    dp1: {},
                    dp2: {},
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{},
                    grb:{}
                },
                out: {
                    soban : index + 18,
                    loaitiec : 'out',
                    sanh : 'out',
                    buoi : 'sang'
                }
            }
        }else if(index == 11){
            item.thongtin = {
                sang: {
                    dp1: {
                        soban : index + 70,
                        loaitiec : 'cuoi',
                        sanh : 'dp1',
                        buoi : 'sang'
                    },
                    dp2: {
                        soban : index + 18,
                        loaitiec : 'cuoi',
                        sanh : 'dp2',
                        buoi : 'sang'
                    },
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                chieu: {
                    dp1: {},
                    dp2: {},
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                out: {
                    soban : index + 18,
                    loaitiec : 'out',
                    sanh : 'out',
                    buoi : 'sang'
                }
            }
                
        }else{
            item.thongtin = {
                sang: {
                    dp1: {
                        soban : index + 70,
                        loaitiec : 'cuoi',
                        sanh : 'dp1',
                        buoi : 'sang'
                    },
                    dp2: {
                        soban : index + 18,
                        loaitiec : 'cuoi',
                        sanh : 'dp2',
                        buoi : 'sang'
                    },
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                chieu: {
                    dp1: {},
                    dp2: {},
                    rb1: {},
                    rb2: {},
                    sp: {},
                    pla:{}
                },
                out: {
                    soban : index + 18,
                    loaitiec : 'out',
                    sanh : 'out',
                    buoi : 'sang'
                }
            }
        }
    })
    return weeks
}

module.exports = {
    getWeeksStartAndEndInMonth,
}
