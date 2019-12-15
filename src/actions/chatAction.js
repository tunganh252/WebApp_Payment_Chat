import * as types from "./types"

import {listChat} from '../data/mockData'

export const getAllChat = () => async dispatch =>{
    dispatch({
        type: types.GET_ALL_CHAT,
        chats: listChat
    })
}

export const sendMess = (mess) => async dispatch =>{
    if(listChat){
        let chat = listChat.find(item=>item.id===mess.toID)
        if(chat){
            chat.chats.push(mess)
        }
    }
    dispatch({
        type: types.SEND_TEXT_MESSAGE,
        chats: listChat
    })
}

export const changeUserChat = (user) => async dispatch => {
    dispatch({
        type: types.CHANGE_USER_CHAT,
        user: user
    })
}