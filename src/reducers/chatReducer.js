import * as types from "../actions/types";
import { weeziAssistant } from "../data/data";

export const initialState = {
  userSelected:{...weeziAssistant,chats:[...weeziAssistant.chats]},
  weeziAssistant:{...weeziAssistant,chats:[...weeziAssistant.chats]},
  chats: [],
  sendMessageResp: {},
  err: ""
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CHAT:
      return {
        ...state,
        chats: [...action.chats],
        err: "",
        type: action.type
      };
    case types.CHANGE_USER_CHAT:
      return {
        ...state,
        // userSelected:{...action.user,chats:[...action.user.chats]},
         userSelected:action.user,
        err: "",
        type: action.type
      };
    case types.SEND_TEXT_MESSAGE:
      return {
        ...state,
        chats: [...action.chats],
        err: "",
        type: action.type
      };
    default:
      return state;
  }
}
