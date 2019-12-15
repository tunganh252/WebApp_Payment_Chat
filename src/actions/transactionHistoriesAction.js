import * as types from "./types";
import { transactionHistories } from "../data/mockData";

export const getAllTransactionHistories = () => async dispatch => {
  dispatch({
    type: types.GET_ALL_TRANSACTION_HISTORIES,
    transactionHistories: transactionHistories
  });
};
export const changeTransactionInfo = (transactionInfo) => async dispatch => {
    dispatch({
        type: types.CHANGE_TRANSACTION_INFO,
        transactionInfo: transactionInfo
      });
};
