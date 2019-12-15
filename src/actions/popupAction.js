import * as types from "./types";
import { popupTransactionPopup } from "../data/data";
// import { weeziAssistant } from "../data/data";
import { _generateDataTransSendMess, _generateDataSendMessAfterConfirm } from "../tools/generateChatSendMessage";
import {userLogin} from '../data/mockData'
import moment from "moment";

//Function
export const sendMessConfirm = (transaction,weeziAssistant) => {
  let mess = _generateDataTransSendMess(transaction);

  if (mess.length > 0) {
    mess.forEach(element=>{
      weeziAssistant.chats.push(element)
    })   
  }
  return {
    type: types.CHANGE_USER_CHAT,
    user: weeziAssistant
  };
};
//==================================================================================
export const showPopupTransaction = (popupKey, data) => async dispatch => {
  let popup = popupTransactionPopup[popupKey];
  popup.popupData = { ...popup.popupData, user: data };

  dispatch({
    type: types.SHOW_POPUP_TRANSACTION,
    popup: popup
  });
};

export const hidePopupTransaction = () => async dispatch => {
  dispatch({
    type: types.HIDE_POPUP_TRANSACTION,
    popup: {}
  });
};
//==========================================================================
export const showReviewGiftCard = data => async dispatch => {
  dispatch({
    type: types.SHOW_REVIEW_GIFT_CARD,
    giftCard: data
  });
};

export const hideReviewGiftCard = () => async dispatch => {
  dispatch({
    type: types.HIDE_REVIEW_GIFT_CARD,
    giftCard: {}
  });
};
//==================================================================================
export const sendPhoneRequireConfirmation = transaction => async dispatch => {
  dispatch({
    type: types.SEND_PHONE_REQUIRE_CONFIRMATION,
    transaction: { ...transaction }
  });
};

export const sendUserRequireConfirmation = (transaction,weeziAssistant) => async dispatch => {
  dispatch(sendMessConfirm(transaction,weeziAssistant));
  dispatch({
    type: types.SEND_USER_REQUIRE_CONFIRMATION,
    transaction: { ...transaction }
  });
};
//==================================SUCCESS CONFIRM================
export const sendSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.SEND_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};
export const giftSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.GIFT_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};
export const topupSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.TOPUP_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};
export const buycardSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.BUYCARD_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};
export const tranferSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.TRANSFER_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};
export const paybillSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.PAYBILL_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};

export const splitSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.SPLIT_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};
export const requestSuccessConfirm = transaction => async dispatch => {
  dispatch({
    type: types.REQUEST_SUCCESS_CONFIRM,
    transaction: { ...transaction }
  });
};
//========================================================================================
export const sendSplitConfirmation = transaction => async dispatch => {
  dispatch({
    type: types.SEND_SPLIT_CONFIRMATION,
    transaction: { ...transaction }
  });
};

//=======================================
export const cancelTransaction = oldWeeziAssistant => async dispatch => {

  dispatch({
    type: types.CANCEL_TRANSACTION
  });
  // console.log(oldWeeziAssistant);
  dispatch ({
    type: types.CHANGE_USER_CHAT,
    user: oldWeeziAssistant
  });
};
export const showPopupPhoneConfirm = (popupKey,data,weeziAssistant) => async dispatch => {
  // console.log(weeziAssistant);
  
  const mess={
    messType: "text",
    messInfo: {
      text: 'Xác nhận giao dịch',
      ico:''
    },
    time:  moment().format("HH:mm"),
    fromID: userLogin.id,
    toID: weeziAssistant.id
  }
  weeziAssistant.chats.push(mess)
  

  dispatch({
    type:types.CHANGE_USER_CHAT,
    user:weeziAssistant
  });
  let popup = popupTransactionPopup[popupKey];
  popup.popupData = { ...popup.popupData, user: data };
    //===============================================
  dispatch({
    type: types.SHOW_POPUP_PHONE_CONFIRM,
    popup: popup
  });
};

//=======================================
export const sendMessAcceptSuccess = (type,dataTransaction, userSelected) => async dispatch => {
  let mess = _generateDataSendMessAfterConfirm(type,dataTransaction);

    mess.forEach(element=>{
      userSelected.chats.push(element)
    })       
    dispatch({
    type: types.CHANGE_USER_CHAT,
    user: userSelected
  });
}

//=======================================
export const showPopupOptional = (data) => async dispatch => {
  dispatch({
    type: types.SHOW_POPUP_OPTIONAL,
    popup: data
  })
}

export const hidePopupOptional = () => async dispatch => {
  dispatch({
    type: types.HIDE_POPUP_OPTIONAL,
  })
}
