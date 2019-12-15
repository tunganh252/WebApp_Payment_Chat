import * as types from "../actions/types";
import {popupDataConfirmPhone} from '../data/data'
export const initialState = {
  popup: {},
  giftCard: {},
  err: "",
  transaction:null,
  isShowWeeziConfirm: false
};

export default function popupTransactionReducer(state = initialState, action) {
  //=====================SHOW/HIDE POPUP=============================================
  switch (action.type) {
    case types.SHOW_POPUP_TRANSACTION:
      return {
        ...state,
        popup: action.popup,
        err: "",
        type: action.type
      };

      case types.SHOW_POPUP_PHONE_CONFIRM :{
        return {
          ...state,
        popup: action.popup,
        err: "",
        type: action.type
        }
      }
    case types.HIDE_POPUP_TRANSACTION:
      return {
        ...state,
        popup: action.popup,
        err: "",
        transaction:null,
        type: action.type,
        isShowWeeziConfirm: false
      };
    //===============================================
    case types.SHOW_REVIEW_GIFT_CARD:
      return {
        ...state,
        giftCard: action.giftCard,
        err: "",
        type: action.type
      };
    case types.HIDE_REVIEW_GIFT_CARD:
      return {
        ...state,
        giftCard: action.giftCard,
        err: "",
        type: action.type
      };
    //================================================
    case types.SHOW_POPUP_OPTIONAL:
        return {
          ...state,
          popup: action.popup,
          err: "",
          type: action.type
        };
    case types.HIDE_POPUP_OPTIONAL:
        return {
          ...state,
          popup: action.popup,
          err: "",
          type: action.type
        };
    //========================================== CONFIRM=====================================
    case types.SEND_PHONE_REQUIRE_CONFIRMATION:
      return {
        ...state,
        transaction: action.transaction,
        err: "",
        type: action.type
      };
    case types.SEND_USER_REQUIRE_CONFIRMATION:
      return {
        ...state,
        transaction: action.transaction,
        err: "",
        popup: popupDataConfirmPhone,
        type: action.type,
        isShowWeeziConfirm: true
      };
      
    case types.SEND_SPLIT_CONFIRMATION:
      return {
        ...state,
        transaction: action.transaction,
        err: "",
        type: action.type
      };

    //===================================FORM CONFIRM SUCCESS TYPES=========================================
    case types.SEND_SUCCESS_CONFIRM:
      return {
        ...state,
        transaction: action.transaction,
        err: "",
        type: action.type
      };
      case types.GIFT_SUCCESS_CONFIRM:
        return {
          ...state,
          transaction: action.transaction,
          err: "",
          type: action.type
        };
    case types.TOPUP_SUCCESS_CONFIRM:
      return {
        ...state,
        transaction: action.transaction,
        err: "",
        type: action.type
      };
    case types.BUYCARD_SUCCESS_CONFIRM:
      return {
        ...state,
        transaction: action.transaction,
        err: "",
        type: action.type
      };
    case types.REQUEST_SUCCESS_CONFIRM:
      return {
        ...state,
        transaction: action.transaction,
        err: "",
        type: action.type
      };

      case types.SPLIT_SUCCESS_CONFIRM:
        return {
          ...state,
          transaction: action.transaction,
          err: "",
          type: action.type
        };
      case types.PAYBILL_SUCCESS_CONFIRM:
        return {
          ...state,
          transaction: action.transaction,
          err: "",
          type: action.type
        };

        case types.TRANSFER_SUCCESS_CONFIRM:
          return {
            ...state,
            transaction: action.transaction,
            err: "",
            type: action.type
          };
  





    //cancel transaction
    case types.CANCEL_TRANSACTION:
      return {
        ...state,
        transaction: null,
        err: "",
        type: action.type,
        isShowWeeziConfirm: false
      };
    default:
      return state;
  }
}
//===========================
