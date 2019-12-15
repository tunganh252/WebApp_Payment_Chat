import * as types from "../actions/types";

import { listContact } from "../data/mockData";

export const initialState = {
  contacts: listContact,
  err: ""
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CONTACT:
      return {
        ...state,
        contacts: action.contacts,
        err: ""
      };
    case types.SEARCH_CONTACT:
      return {
        ...state,
        contacts: action.contacts,
        err: ""
      };
    default:
      return state;
  }
}
