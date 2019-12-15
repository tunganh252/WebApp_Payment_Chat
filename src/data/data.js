//image
import avatar_weezi from "../images/avatar_weezi.svg";
import ic_send_money from "../images/ic_send_money.svg";
import ic_request_money from "../images/ic_request_money.svg";
import ic_split_money from "../images/ic_split_money.svg";
import ic_send_gift from "../images/ic_send_gift.svg";

import img_send from "../images/popup/img_send.svg";
import img_request from "../images/popup/img_request.svg";
import img_split from "../images/popup/img_split.svg";
import img_gift from "../images/popup/img_gift.svg";
import img_weezi from "../images/popup/img_weezi.svg";

import backCard_default from "../images/popup/bankCard_default.svg";
import backCard_active from "../images/popup/bankCard_active.svg";
import Union_default from "../images/popup/Union_default.svg";
import Union_active from "../images/popup/Union_active.svg";

import ic_weezi_topup from "../images/popup/ic_weezi_topup.svg";
import ic_weezi_buycard from "../images/popup/ic_weezi_buycard.svg";
import ic_weezi_transfer from "../images/popup/ic_weezi_transfer.svg";
import ic_weezi_billing from "../images/popup/ic_weezi_billing.svg";

import ic_mobiphone_default from "../images/popup/ic_mobiphone_default.svg";
import ic_mobiphone_active from "../images/popup/ic_mobiphone_active.svg";
import ic_viettel_default from "../images/popup/ic_viettel_default.svg";
import ic_viettel_active from "../images/popup/ic_viettel_active.svg";
import ic_vinaphone_default from "../images/popup/ic_vinaphone_default.svg";
import ic_vinaphone_active from "../images/popup/ic_vinaphone_active.svg";
import ic_3g_4g_mobiphone_default from "../images/popup/ic_3g_4g_mobiphone_default.svg";
import ic_3g_4g_mobiphone_active from "../images/popup/ic_3g_4g_mobiphone_active.svg";
import ic_3g_4g_viettel_default from "../images/popup/ic_3g_4g_viettel_default.svg";
import ic_3g_4g_viettel_active from "../images/popup/ic_3g_4g_viettel_active.svg";
import ic_garena_active from "../images/popup/ic_garena_active.svg";
import ic_garena_default from "../images/popup/ic_garena_default.svg";
import ic_vcoin_active from "../images/popup/ic_vcoin_active.svg";
import ic_vcoin_default from "../images/popup/ic_vcoin_default.svg";
import ic_oncash_active from "../images/popup/ic_oncash_active.svg";
import ic_oncash_default from "../images/popup/ic_oncash_default.svg";
import ic_gate_active from "../images/popup/ic_gate_active.svg";
import ic_gate_default from "../images/popup/ic_gate_default.svg";
import ic_zing_active from "../images/popup/ic_zing_active.svg";
import ic_zing_default from "../images/popup/ic_zing_default.svg";

import ic_biwaco_active from "../images/popup/ic_biwaco_active.svg";
import ic_biwaco_default from "../images/popup/ic_biwaco_default.svg";

import ic_giadinh_default from "../images/popup/ic_giadinh_default.svg";
import ic_giadinh_active from "../images/popup/ic_giadinh_active.svg";

import ic_huewaco_default from "../images/popup/ic_huewaco_default.svg";
import ic_huewaco_active from "../images/popup/ic_huewaco_active.svg";

import ic_dowasco_default from "../images/popup/ic_dowasco_default.svg";
import ic_dowasco_active from "../images/popup/ic_dowasco_active.svg";

import ic_ta_default from "../images/popup/ic_ta_default.svg";
import ic_ta_active from "../images/popup/ic_ta_default.svg";

import ic_bank_shinhan from "../images/popup/bank_shinhan.svg";
import ic_bank_vietcom from "../images/popup/bank_vietcom.svg";
import ic_bank_vietin from "../images/popup/bank_vietin.svg";

export const weeziAssistant = {
  id: -1,
  isMarked: true,
  avatar: avatar_weezi,
  name: "Weezi Assistant",
  username: "weezi",
  isOnline: true,
  chats: [
    {
      messType: "text",
      messInfo: {
        text: "Hello, can i help you?",
        ico: ""
      }, 
      time: "19:18",
      fromID: -1,
      toID: 2
    }
  ]
};

export const transactionButton = [
  {
    key: "send",
    background: ic_send_money
  },
  {
    key: "request",
    background: ic_request_money
  },
  {
    key: "split",
    background: ic_split_money
  },
  {
    key: "gift",
    background: ic_send_gift
  }
];
export const popupTransactionPopup = {
  send: {
    key: "send",
    style: {
      transColor: "linear-gradient(to top, #9000ff, #482ef6)",
      transImage: {
        img: img_send,
        width: 320,
        height: 284,
        left: -40
      },
      overflow: "hidden"
    },
    popupData: {
      title: "Gửi tiền cho..."
    }
  },
  request: {
    key: "request",
    style: {
      transColor: "linear-gradient(to top, #f7bb25, #ff2424)",
      transImage: {
        img: img_request,
        width: 275,
        height: 300,
        left: 15
      },
      overflow: "unset"
    },
    popupData: {
      title: "Nhắc nợ với..."
    }
  },
  split: {
    key: "split",
    style: {
      transColor: "linear-gradient(to top, #00a548, #bdd50a)",
      transImage: {
        img: img_split,
        width: 279,
        height: 279,
        left: 25
      },
      overflow: "auto"
    },
    popupData: {
      title: "Chia tiền cho..."
    }
  },
  gift: {
    key: "gift",
    style: {
      transColor: "linear-gradient(to top, #f61280, #ea57db)",
      transImage: {
        img: img_gift,
        width: 320,
        height: 284,
        left: -50
      },
      overflow: "unset"
    },
    popupData: {
      title: "Tặng quà cho..."
    }
  },
  phoneconfirm: {
    key: "phoneconfirm",
    style: {
      transColor:
        "linear-gradient(66.84deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)",
      transImage: {
        img: img_weezi,
        width: 224,
        height: 308,
        left: 9
      },
      overflow: "unset"
    },
    popupData: {
      title: "Confirm Phone"
    }
  },
  topup: {
    key: "topup",
    text: "Nạp tiền điện thoại",
    image: ic_weezi_topup,
    backgroundGradient: "linear-gradient(to top, #9000ff, #482ef6)",
    style: {
      transColor:
        "linear-gradient(66.84deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)",
      transImage: {
        img: img_weezi,
        width: 224,
        height: 308,
        left: 9
      },
      overflow: "unset"
    },
    popupData: {
      title: "Nạp tiền điện thoại..."
    }
  },
  buycard: {
    keyParent: "weeziTransfer",
    key: "buycard",
    text: "Mua mã thẻ",
    image: ic_weezi_buycard,
    backgroundGradient: "linear-gradient(to top, #f7bb25, #ff2424)",
    style: {
      transColor:
        "linear-gradient(66.84deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)",
      transImage: {
        img: img_weezi,
        width: 224,
        height: 308,
        left: 9
      },
      overflow: "unset"
    },
    popupData: {
      title: "Mua mã thẻ..."
    }
  },
  transfer: {
    keyParent: "weeziTransfer",
    key: "transfer",
    text: "Chuyển khoản",
    image: ic_weezi_transfer,
    backgroundGradient: "linear-gradient(to top, #00a548, #bdd50a)",
    style: {
      transColor:
        "linear-gradient(66.84deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)",
      transImage: {
        img: img_weezi,
        width: 224,
        height: 308,
        left: 9
      },
      overflow: "unset"
    },
    popupData: {
      title: "Chuyển khoản..."
    }
  },
  paybill: {
    keyParent: "weeziTransfer",
    key: "paybill",
    text: "Thanh toán hóa đơn",
    image: ic_weezi_billing,
    backgroundGradient: "linear-gradient(to top, #00cfff, #0065ff, #005bec)",
    style: {
      transColor:
        "linear-gradient(66.84deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)",
      transImage: {
        img: img_weezi,
        width: 224,
        height: 308,
        left: 9
      },
      overflow: "unset"
    },
    popupData: {
      title: "Thanh toán hóa đơn..."
    }
  }
};
//========================================transcation
export const discount = 0.04;

export const denominationsData = [
  "10000",
  "20000",
  "100000",
  "200000",
  "30000",
  "50000",
  "300000",
  "500000"
];
export const choiceOption = {
  Contact: 0,
  Bank: 1,
  Branch: 2
};

export const popupDataConfirmPhone = {
  key: "phoneconfirm",
  style: {
    transColor: "linear-gradient(to top, #f61280, #ea57db)",
    transImage: {
      img: img_weezi,
      width: 320,
      height: 284,
      left: -50
    },
    overflow: "unset"
  },
  popupData: {
    title: "Phone Confirm"
  }
};
//========================================transcation
export const typeChoiceDropdown = {
  Contact: 0,
  Bank: 1,
  Branch: 2
};

export const typeTransferNapas = [
  {
    type: "CARD_NUMBER",
    title: "Số thẻ",
    border_active: "1px solid #1A3F95",
    img_default: backCard_default,
    img_active: backCard_active
  },
  {
    type: "STK",
    title: "Số tài khoản",
    border_active: "1px solid #1A3F95",
    img_default: Union_default,
    img_active: Union_active
  }
];

export const typeInputTransfer = {
  inputFindUser: {
    type: 0,
    content_nth1: "Nhập số thẻ",
    content_nth2: "Nhập số tài khoản"
  },
  inputMoneyVND: {
    type: 1,
    content: "Nhập số tiền"
  },
  inputContent: {
    type: 3,
    content: "Nội dung chuyển tiền"
  }
};
export const typeProviderPhoneCard = [
  {
    type: "MOBIPHONE",
    border_active: "1px solid #1A3F95",
    img_default: ic_mobiphone_default,
    img_active: ic_mobiphone_active
  },
  {
    type: "VIETTEL",
    border_active: "1px solid #1A3F95",
    img_default: ic_viettel_default,
    img_active: ic_viettel_active
  },
  {
    type: "VINAPHONE",
    border_active: "1px solid #1A3F95",
    img_default: ic_vinaphone_default,
    img_active: ic_vinaphone_active
  },
  {
    type: "3G4GMOBIPHONE",
    border_active: "1px solid #1A3F95",
    img_default: ic_3g_4g_mobiphone_default,
    img_active: ic_3g_4g_mobiphone_active
  },
  {
    type: "3G4GVIETTEL",
    border_active: "1px solid #1A3F95",
    img_default: ic_3g_4g_viettel_default,
    img_active: ic_3g_4g_viettel_active
  }
];
export const typeProviderGameCard = [
  {
    type: "GARENA",
    border_active: "1px solid #E61F25",
    img_default: ic_garena_default,
    img_active: ic_garena_active
  },
  {
    type: "VCOIN",
    border_active: "1px solid #E61F25",
    img_default: ic_vcoin_default,
    img_active: ic_vcoin_active
  },
  {
    type: "ONCASH",
    border_active: "1px solid #E61F25",
    img_default: ic_oncash_default,
    img_active: ic_oncash_active
  },
  {
    type: "GATE",
    border_active: "1px solid #E61F25",
    img_default: ic_gate_default,
    img_active: ic_gate_active
  },
  {
    type: "ZING",
    border_active: "1px solid #E61F25",
    img_default: ic_zing_default,
    img_active: ic_zing_active
  }
];
export const typeProviderWater = [
  {
    type: "BIWACO",
    border_active: "1px solid #1A3F95",
    img_default: ic_biwaco_default,
    img_active: ic_biwaco_active
  },
  {
    type: "GIADINH",
    border_active: "1px solid #1A3F95",
    img_default: ic_giadinh_default,
    img_active: ic_giadinh_active
  },
  {
    type: "HUEWACO",
    border_active: "1px solid #1A3F95",
    img_default: ic_huewaco_default,
    img_active: ic_huewaco_active
  },
  {
    type: "TA",
    border_active: "1px solid #1A3F95",
    img_default: ic_ta_default,
    img_active: ic_ta_active
  },
  {
    type: "DOWASCO",
    border_active: "1px solid #1A3F95",
    img_default: ic_dowasco_default,
    img_active: ic_dowasco_active
  }
];

export const dataBankTransfer = [
  {
    id: 0,
    avatar: ic_bank_shinhan,
    name: "Shinhan bank",
    pin_code: "1237823"
  },
  {
    id: 1,
    avatar: ic_bank_vietcom,
    name: "VietcomBank",
    pin_code: "3324234"
  },
  {
    id: 2,
    avatar: ic_bank_vietin,
    name: "VietinBank",
    pin_code: "1237823"
  }
];

export const dataBranchTransfer = [
  {
    id: 0,
    name: "Ho Chi Minh - Cong Hoa",
    short_name: "HCM",
    pin_code: "1237823"
  },
  {
    id: 1,
    name: "Ha Noi - Cau Giay",
    short_name: "HN",
    pin_code: "3324234"
  },
  {
    id: 2,
    name: "Da Nang - Nguyen Du",
    short_name: "DN",
    pin_code: "1237823"
  }
];

//MESSAGE type
export const messTypes = {
  text: "text",
  topup: "topup",
  buycard: "buycard",
  cardinfo:'cardinfo',
  transfer: "transfer",
  payBill:"payBill",

  // Confirm success or cancel
  success: "success",
  cancel: "cancel",
};
