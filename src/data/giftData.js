// christmas
import christmas1_front from '../images/gift_ticket/christmas/1/front.png'
import christmas1_back from '../images/gift_ticket/christmas/1/back.png'
import christmas2_front from '../images/gift_ticket/christmas/2/front.png'
import christmas2_back from '../images/gift_ticket/christmas/2/back.png'
import christmas3_front from '../images/gift_ticket/christmas/3/front.png'
import christmas3_back from '../images/gift_ticket/christmas/3/back.png'
import christmas4_front from '../images/gift_ticket/christmas/4/front.png'
import christmas4_back from '../images/gift_ticket/christmas/4/back.png'
import christmas5_front from '../images/gift_ticket/christmas/5/front.png'
import christmas5_back from '../images/gift_ticket/christmas/5/back.png'
// birthday
import birthday1_front from '../images/gift_ticket/birthday/1/front.png'
import birthday1_back from '../images/gift_ticket/birthday/1/back.png'
import birthday2_front from '../images/gift_ticket/birthday/2/front.png'
import birthday2_back from '../images/gift_ticket/birthday/2/back.png'
import birthday3_front from '../images/gift_ticket/birthday/3/front.png'
import birthday3_back from '../images/gift_ticket/birthday/3/back.png'
import birthday4_front from '../images/gift_ticket/birthday/4/front.png'
import birthday4_back from '../images/gift_ticket/birthday/4/back.png'
import birthday5_front from '../images/gift_ticket/birthday/5/front.png'
import birthday5_back from '../images/gift_ticket/birthday/5/back.png'
// thanking
import thanking1_front from '../images/gift_ticket/thanking/1/front.png'
import thanking1_back from '../images/gift_ticket/thanking/1/back.png'
import thanking2_front from '../images/gift_ticket/thanking/2/front.png'
import thanking2_back from '../images/gift_ticket/thanking/2/back.png'
import thanking3_front from '../images/gift_ticket/thanking/3/front.png'
import thanking3_back from '../images/gift_ticket/thanking/3/back.png'
import thanking4_front from '../images/gift_ticket/thanking/4/front.png'
import thanking4_back from '../images/gift_ticket/thanking/4/back.png'
// wedding
import wedding1_front from '../images/gift_ticket/wedding/1/front.png'
import wedding1_back from '../images/gift_ticket/wedding/1/back.png'
import wedding2_front from '../images/gift_ticket/wedding/2/front.png'
import wedding2_back from '../images/gift_ticket/wedding/2/back.png'
import wedding3_front from '../images/gift_ticket/wedding/3/front.png'
import wedding3_back from '../images/gift_ticket/wedding/3/back.png'
import wedding4_front from '../images/gift_ticket/wedding/4/front.png'
import wedding4_back from '../images/gift_ticket/wedding/4/back.png'
import wedding5_front from '../images/gift_ticket/wedding/5/front.png'
import wedding5_back from '../images/gift_ticket/wedding/5/back.png'
// fathers_day
import fathers_day1_front from '../images/gift_ticket/fathers_day/1/front.png'
import fathers_day1_back from '../images/gift_ticket/fathers_day/1/back.png'
import fathers_day2_front from '../images/gift_ticket/fathers_day/2/front.png'
import fathers_day2_back from '../images/gift_ticket/fathers_day/2/back.png'
import fathers_day3_front from '../images/gift_ticket/fathers_day/3/front.png'
import fathers_day3_back from '../images/gift_ticket/fathers_day/3/back.png'
import fathers_day4_front from '../images/gift_ticket/fathers_day/4/front.png'
import fathers_day4_back from '../images/gift_ticket/fathers_day/4/back.png'
// mothers_day
import mothers_day1_front from '../images/gift_ticket/mothers_day/1/front.png'
import mothers_day1_back from '../images/gift_ticket/mothers_day/1/back.png'
import mothers_day2_front from '../images/gift_ticket/mothers_day/2/front.png'
import mothers_day2_back from '../images/gift_ticket/mothers_day/2/back.png'
import mothers_day3_front from '../images/gift_ticket/mothers_day/3/front.png'
import mothers_day3_back from '../images/gift_ticket/mothers_day/3/back.png'
import mothers_day4_front from '../images/gift_ticket/mothers_day/4/front.png'
import mothers_day4_back from '../images/gift_ticket/mothers_day/4/back.png'
// valentine
import valentine1_front from '../images/gift_ticket/valentine/1/front.png'
import valentine1_back from '../images/gift_ticket/valentine/1/back.png'
import valentine2_front from '../images/gift_ticket/valentine/2/front.png'
import valentine2_back from '../images/gift_ticket/valentine/2/back.png'
import valentine3_front from '../images/gift_ticket/valentine/3/front.png'
import valentine3_back from '../images/gift_ticket/valentine/3/back.png'
import valentine4_front from '../images/gift_ticket/valentine/4/front.png'
import valentine4_back from '../images/gift_ticket/valentine/4/back.png'
// women
import women1_front from '../images/gift_ticket/women/1/front.png'
import women1_back from '../images/gift_ticket/women/1/back.png'
import women2_front from '../images/gift_ticket/women/2/front.png'
import women2_back from '../images/gift_ticket/women/2/back.png'
import women3_front from '../images/gift_ticket/women/3/front.png'
import women3_back from '../images/gift_ticket/women/3/back.png'
import women4_front from '../images/gift_ticket/women/4/front.png'
import women4_back from '../images/gift_ticket/women/4/back.png'
import women5_front from '../images/gift_ticket/women/5/front.png'
import women5_back from '../images/gift_ticket/women/5/back.png'

const position = {
    top:{
        alignItems:'flex-start',
        marginTop:60,
        width:130,
        height:90
    },
    center:{
        alignItems:'center',
        width:130,
        height:90
    },
    bottom:{
        alignItems:'flex-end',
        marginBottom:50,
        width:130,
        height:90
    }
}

const christmasTickets = [
    {
        front:christmas1_front,
        back:christmas1_back,
        text:{
            position:position.top,
            color:'#fff'
        }
    },
    {
        front:christmas2_front,
        back:christmas2_back,
        text:{
            position:position.bottom,
            color:'#fff'
        }
    },
    {
        front:christmas3_front,
        back:christmas3_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
    {
        front:christmas4_front,
        back:christmas4_back,
        text:{
            position:position.bottom,
            color:'#3eabdd'
        }
    },
    {
        front:christmas5_front,
        back:christmas5_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
]

const thankingTickets = [
    {
        front:thanking1_front,
        back:thanking1_back,
        text:{
            position:position.top,
            color:'#fff'
        }
    },
    {
        front:thanking2_front,
        back:thanking2_back,
        text:{
            position:position.top,
            color:'#000'
        }
    },
    {
        front:thanking3_front,
        back:thanking3_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
    {
        front:thanking4_front,
        back:thanking4_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
]

const birthdayTickets = [
    {
        front:birthday1_front,
        back:birthday1_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
    {
        front:birthday2_front,
        back:birthday2_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
    {
        front:birthday3_front,
        back:birthday3_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
    {
        front:birthday4_front,
        back:birthday4_back,
        text:{
            position:position.top,
            color:'#fff'
        }
    },
    {
        front:birthday5_front,
        back:birthday5_back,
        text:{
            position:position.bottom,
            color:'#fff'
        }
    },
]

const weddingTickets = [
    {
        front:wedding1_front,
        back:wedding1_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
    {
        front:wedding2_front,
        back:wedding2_back,
        text:{
            position:position.center,
            color:'#003c64'
        }
    },
    {
        front:wedding3_front,
        back:wedding3_back,
        text:{
            position:position.center,
            color:'#ce1236'
        }
    },
    {
        front:wedding4_front,
        back:wedding4_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
    {
        front:wedding5_front,
        back:wedding5_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
]

const fathers_dayTickets = [
    {
        front:fathers_day1_front,
        back:fathers_day1_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
    {
        front:fathers_day2_front,
        back:fathers_day2_back,
        text:{
            position:position.center,
            color:'#ff4b6c'
        }
    },
    {
        front:fathers_day3_front,
        back:fathers_day3_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
    {
        front:fathers_day4_front,
        back:fathers_day4_back,
        text:{
            position:position.bottom,
            color:'#fff'
        }
    }
]

const mothers_dayTickets = [
    {
        front:mothers_day1_front,
        back:mothers_day1_back,
        text:{
            position:position.top,
            color:'#000'
        }
    },
    {
        front:mothers_day2_front,
        back:mothers_day2_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
    {
        front:mothers_day3_front,
        back:mothers_day3_back,
        text:{
            position:position.top,
            color:'#f12a75'
        }
    },
    {
        front:mothers_day4_front,
        back:mothers_day4_back,
        text:{
            position:position.bottom,
            color:'#000'
        }
    }
]

const valentineTickets = [
    {
        front:valentine1_front,
        back:valentine1_back,
        text:{
            position:position.top,
            color:'#000'
        }
    },
    {
        front:valentine2_front,
        back:valentine2_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
    {
        front:valentine3_front,
        back:valentine3_back,
        text:{
            position:position.center,
            color:'#fff'
        }
    },
    {
        front:valentine4_front,
        back:valentine4_back,
        text:{
            position:position.top,
            color:'#000'
        }
    }
]

const womenTickets = [
    {
        front:women1_front,
        back:women1_back,
        text:{
            position:position.center,
            color:'#ff4040'
        }
    },
    {
        front:women2_front,
        back:women2_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
    {
        front:women3_front,
        back:women3_back,
        text:{
            position:position.top,
            color:'#fff'
        }
    },
    {
        front:women4_front,
        back:women4_back,
        text:{
            position:position.center,
            color:'#000'
        }
    },
    {
        front:women5_front,
        back:women5_back,
        text:{
            position:position.bottom,
            color:'#c9625e'
        }
    },
]

export const giftData = [
    {
        key:'christmas',
        title:'GIÁNG SINH',
        tickets:christmasTickets
    },
    {
        key:'wedding',
        title:'ĐÁM CƯỚI',
        tickets:weddingTickets
    },
    {
        key:'birthday',
        title:'SINH NHẬT',
        tickets:birthdayTickets
    },
    {
        key:'thanking',
        title:'CẢM ƠN',
        tickets:thankingTickets
    },
    {
        key:'fathers_day',
        title:'NGÀY CỦA CHA',
        tickets:fathers_dayTickets
    },
    {
        key:'mothers_day',
        title:'NGÀY CỦA MẸ',
        tickets:mothers_dayTickets
    },
    {
        key:'valentine',
        title:'LỄ TÌNH NHÂN',
        tickets:valentineTickets
    },
    {
        key:'women',
        title:'QUỐC TẾ PHỤ NỮ',
        tickets:womenTickets
    }
]