//image
import ava_annhien from "../images/avatar/ava_annhien.svg";
import ava_ngbinhan from "../images/avatar/ava_ngbinhan.svg";
import ava_mc from "../images/avatar/ava_mc.jpg";
import ava_batman from "../images/avatar/ava_batman.jpg";
import ava_captain from "../images/avatar/ava_captain.jpg";
import ava_ironman from "../images/avatar/ava_ironman.jpg";
import ava_luffy from "../images/avatar/ava_luffy.jpg";
import ava_mario from "../images/avatar/ava_mario.jpg";
import ava_spiderman from "../images/avatar/ava_spiderman.jpg";
import ava_superman from "../images/avatar/ava_superman.jpg";
import logo_vietinbank from "../images/ic_logo_vietinbank.svg";
//collection
import demo_1 from "../images/collection/demo_1.jpg";
import demo_2 from "../images/collection/demo_2.jpg";
import demo_3 from "../images/collection/demo_3.jpg";
import demo_4 from "../images/collection/demo_4.png";
import demo_5 from "../images/collection/demo_5.jpg";
import demo_6 from "../images/collection/demo_6.jpg";
//transaction
import ic_transaction_buycard from "../images/popup/ic_transaction_buycard.svg";
import ic_transaction_billing from "../images/popup/ic_transaction_billing.svg";
import ic_transaction_topup from "../images/popup/ic_transaction_topup.svg";
import ic_transaction_transfer from "../images/popup/ic_transaction_transfer.svg";
import ic_history_green from "../images/popup/ic_history_green.svg";
import ic_history_red from "../images/popup/ic_history_red.svg";
import ic_arrow_next from "../images/ic_arrow_next_back.svg";
import ic_symbol_money from "../images/ic_symbol_money.svg";
export const userLogin = {
  id: 2,
  isGroup: false,
  avatar: ava_mc,
  fullName: "Ninh Dương Lan Ngọc",
  username: "mainchar",
  phone: "0901111111",
  name: "Main Character",
  dateOfBirth: "30/05/1992",
  gender: "Nữ",
  address: "B20 Bạch Đằng P2 Quận Tân Bình TP.HCM",
  bank: {
    logo: logo_vietinbank,
    bankName: "NGÂN HÀNG TMCP CÔNG THƯƠNG VIỆT NAM",
    accountNumber: "0021001965221",
    accountName: "Le Hoai",
    accountType: "Payment account",
    cardInfo: "Quản lý",
    transactionLimit: "Quản lý",
    iconArrow: ic_arrow_next,
    cardNumber: "052  ****  ****  1200",
    date: "22/04/2010",
    transactionLevel: "20.000.000",
    transactionLimitDate: "150.000.000"
  }
};

const userBinhAn = {
  id: 1,
  isGroup: false,
  avatar: ava_ngbinhan,
  name: "Nguyễn Bình An",
  username: "ngbinhan",
  isOnline: false,
  phone: "0901136812",
  chats: [
    {
      messInfo: {
        text: "Thank you",
        ico: ""
      },
      messType: "text",
      time: "19:18",
      fromID: 1,
      toID: 2
    }
  ]
};

const userAnNhien = {
  id: 3,
  isGroup: false,
  avatar: ava_annhien,
  name: "An Nhiên",
  username: "annhien1989",
  isOnline: true,
  phone: "0901193513",
  chats: [
    {
      messType: "text",
      messInfo: {
        text: "Dương ơi",
        ico: ""
      },
      time: "19:00",
      fromID: 3,
      toID: 2
    },
    {
      messType: "text",
      messInfo: {
        text: "Chị đang cần 500k gấp, em cho chị mượn nhé?",
        ico: ""
      },
      time: "19:00",
      fromID: 3,
      toID: 2
    },
    {
      messType: "text",
      messInfo: {
        text: "Ok, em chuyển qua ngân hàng Techcom cho chị nhé?",
        ico: ""
      },
      time: "19:18",
      fromID: 2,
      toID: 3,
      isRead: true
    }
  ],
  collection: [
    demo_1,
    demo_2,
    demo_3,
    demo_4,
    demo_5,
    demo_6,
    demo_1,
    demo_2,
    demo_3,
    demo_4,
    demo_5,
    demo_6,
    demo_1,
    demo_2,
    demo_3,
    demo_4,
    demo_5,
    demo_6
  ]
};

const userBatman = {
  id: 4,
  isGroup: false,
  avatar: ava_batman,
  name: "Batman",
  username: "bat_the_man",
  isOnline: true,
  phone: "0901212114",
  chats: [
    {
      messType: "text",
      messInfo: {
        text: 'Xin tí "máu" đi',
        ico:''
      },
      time: "19:18",
      fromID: 4,
      toID: 2
    }
  ]
};
const userCaptain = {
  id: 5,
  isGroup: false,
  avatar: ava_captain,
  name: "Captain American",
  username: "man_of_man",
  isOnline: true,
  phone: "0909971115",
  chats: [
    {
      messType: "text",
      messInfo: {
        text: '"Xin chào Việt Nam"',
        ico:''
      },
      time: "19:18",
      fromID: 5,
      toID: 2
    }
  ]
};
const userIronman = {
  id: 6,
  isGroup: false,
  avatar: ava_ironman,
  name: "Iron Man",
  username: "easy_money",
  isOnline: true,
  phone: "0905321116",
  chats: [
    {
      messType: "text",
      messInfo: {
        text:  "Xin hỏi thí chủ có bán ve chai ko?",
        ico:''
      },
      time: "19:18",
      fromID: 6,
      toID: 2
    }
  ]
};
const userLuffy = {
  id: 7,
  isGroup: false,
  avatar: ava_luffy,
  name: "Luffy",
  username: "gomu_gomu_gomu",
  isOnline: true,
  phone: "0909471117",
  chats: [
    {
      messType: "text",
      messInfo: {
        text: "Đói quá man .....",
        ico:''
      },
      time: "19:18",
      fromID: 7,
      toID: 2
    }
  ]
};
const userMario = {
  id: 8,
  isGroup: false,
  avatar: ava_mario,
  name: "Mario",
  username: "love_princess",
  isOnline: false,
  phone: "0904671118",
  chats: [
    {
      messType: "text",
      messInfo: {
        text: "Công túa ở mô rứa ?",
        ico:''
      },
      time: "19:18",
      fromID: 8,
      toID: 2
    }
  ]
};
const userSpiderman = {
  id: 9,
  isGroup: false,
  avatar: ava_spiderman,
  name: "Spider Man",
  username: "homeless",
  isOnline: true,
  phone: "0903321119",
  chats: [
    {
      messType: "text",
      messInfo: {
        text: "Hàng may dệt chất lượng, mại zô !!!",
        ico:''
      },
      time: "19:18",
      fromID: 9,
      toID: 2
    }
  ]
};
const userSuperman = {
  id: 10,
  isGroup: false,
  avatar: ava_superman,
  name: "Superman",
  username: "man_than_batman",
  isOnline: false,
  phone: "0901001120",
  chats: [
    {
      messType: "text",
      messInfo: {
        text: "Nhìn gì đấy? Thích nhích ko !",
        ico:''
      },
      time: "19:18",
      fromID: 10,
      toID: 2
    }
  ]
};

export const listContact = [
  userBinhAn,
  userAnNhien,
  userIronman,
  userSuperman,
  userCaptain,
  userBatman,
  userLuffy,
  userMario,
  userSpiderman
];

export const listChat = [
  userBinhAn,
  userAnNhien,
  {
    groupID: 1,
    isGroup: true,
    member: [userIronman, userBatman, userCaptain],
    name: "Group tổng hợp",
    isOnline: true,
    chats: [
      {
        messType: "audio",
        messInfo: {
          text: "[Tin nhắn âm thanh]",
          ico:''
        },
        time: "19:18",
        fromID: 1,
        toID: 1
      }
    ]
  },
  userIronman,
  userSuperman,
  userCaptain,
  userBatman,
  userLuffy,
  userMario,
  userSpiderman
];
//Data HOME==============================================
export const transactionHistories = [
  {
    date: "17 Tháng 10",
    transaction: [
      {
        type: "buycard",
        amount: "200.211",
        sign: "+",
        icon: ic_transaction_buycard,
        icon_history: ic_history_green,
        description: "Trả Tiền Tao Mày !!",
        transactionNo: "W123456",
        time: "15:05",
        fullname: "Thái Mỹ Phương",
        avatar: ava_annhien,
        account: "@tamypu",
        action: "Request Money With..."
      },
      {
        type: "topup",
        amount: "200.000",
        sign: "+",
        icon: ic_transaction_topup,
        icon_history: ic_history_green,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W789012",
        time: "13:05",
        fullname: "Trần Tiểu Vy",
        avatar: ava_ngbinhan,
        account: "@tamypu",
        action: "Send Money To..."
      }
    ]
  },
  {
    date: "16 Tháng 10",
    transaction: [
      {
        type: "billing",
        amount: "200.000",
        sign: "+",
        icon: ic_transaction_billing,
        icon_history: ic_history_green,
        description: "Cuối tháng rồi đói quá !!!",
        transactionNo: "W03434343",
        time: "01:05",
        fullname: "Đỗ Mỹ Linh",
        avatar: ava_mc,
        account: "@tamypu",
        action: "Received Monney From "
      },
      {
        type: "topup",
        amount: "200.000",
        sign: "-",
        icon: ic_transaction_topup,
        icon_history: ic_history_red,
        description: "Ước có cục tiền rơi chúng đầu",
        transactionNo: "W07978674",
        time: "19:05",
        fullname: "Thái Mỹ Phương",
        avatar: ava_batman,
        account: "@tamypu",
        action: "Send Money To..."
      },
      {
        type: "transfer",
        amount: "320.000",
        sign: "-",
        icon: ic_transaction_transfer,
        icon_history: ic_history_red,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W004567",
        time: "18:05",
        fullname: "Nguyễn Cao Kỳ Duyên",
        avatar: ava_superman,
        account: "@tamypu",
        action: "Send Monney To...."
      },
      {
        type: "billing",
        amount: "200.000",
        sign: "+",
        icon: ic_transaction_billing,
        icon_history: ic_history_green,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W00009812",
        time: "16:05",
        fullname: "Đặng Thị Ngọc Hân",
        avatar: ava_mario,
        account: "@tamypu",
        action: "Received Money From "
      },
      {
        type: "buycard",
        amount: "200.000",
        sign: "+",
        icon: ic_transaction_buycard,
        icon_history: ic_history_green,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W00213243",
        time: "4:05",
        fullname: "Đặng Thị Ngọc Hân",
        avatar: ava_luffy,
        account: "@tamypu",
        action: "Send Gift To ..."
      }
    ]
  },
  {
    date: "15 Tháng 10",
    transaction: [
      {
        type: "billing",
        amount: "200.000",
        sign: "-",
        icon: ic_transaction_billing,
        icon_history: ic_history_red,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W003131313",
        time: "20:05",
        fullname: "Nguyễn Thu Thủy",
        avatar: ava_ironman,
        account: "@tamypu",
        action: "Send Money To ... "
      },
      {
        type: "topup",
        amount: "200.000",
        sign: "-",
        icon: ic_transaction_topup,
        icon_history: ic_history_red,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W00321312313",
        time: "15:05",
        fullname: "Nguyễn Thiên Nga ",
        avatar: ava_captain,
        account: "@tamypu",
        action: "Received Money From... "
      },
      {
        type: "transfer",
        amount: "320.000",
        sign: "+",
        icon: ic_transaction_transfer,
        icon_history: ic_history_green,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W003131313",
        time: "12:05",
        fullname: "Nguyễn Thị Ngọc Khánh",
        account: "@tamypu",
        avatar: ava_spiderman,
        action: "Split Money With ...."
      },
      {
        type: "billing",
        amount: "200.000",
        sign: "-",
        icon: ic_transaction_billing,
        icon_history: ic_history_red,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W004565653",
        time: "10:05",
        fullname: "	Phan Thu Ngân",
        account: "@tamypu",
        avatar: ava_mario,
        action: "Send Money To...."
      },
      {
        type: "buycard",
        amount: "200.000",
        sign: "+",
        icon: ic_transaction_buycard,
        icon_history: ic_history_green,
        description: "Mừng Đám Cưới Bạn Nè",
        transactionNo: "W004306565",
        time: "09:05",
        fullname: "Phạm Thị Mai Phương",
        avatar: ava_ngbinhan,
        account: "@tamypu",
        action: "Received Money From ..... "
      }
    ]
  }
];
//=========History data
export const textOptions = [
  "Tất cả các giao dịch",
  "Gửi Tiền",
  "Nhắc Nợ",
  "Chia Tiền",
  "Space,Sub Space",
  "Facepay",
  "Auto Save",
  "Weezi Topup",
  "Giao dịch Weezi",
  "Hóa đơn Weezi"
];

export const bankCard = {
  title: "Thay đổi hạn mức cho phép",
  imageMoney: ic_symbol_money,
  value: 1000000,
  step: 1000,
  minValue: 100000,
  maxValue: 2000000
};
