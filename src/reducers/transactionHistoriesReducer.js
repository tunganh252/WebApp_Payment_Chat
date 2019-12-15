import * as types from "../actions/types";
export const initialState = {
  transactionHistories: [],
  transactionInfo: {
    avatar: "",
    gradient: "",
    amount: "",
    action: "",
    sign: "",
    date: "",
    time: "",
    transactionNo: "",
    description: "",
    fullname: ""
  },
  err: ""
};

export default function transationHistoriesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case types.GET_ALL_TRANSACTION_HISTORIES:
      return {
        ...state,
        err: "",
        transactionHistories: [...action.transactionHistories]
      };
    case types.CHANGE_TRANSACTION_INFO:
      return {
        ...state,
        err: "",
        transactionInfo: { ...action.transactionInfo }
      };
    default:
      return state;
  }
}
