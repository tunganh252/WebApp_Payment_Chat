import * as types from "./types"

import {listContact} from '../data/mockData'

export const getAllContact = () => async dispatch =>{
    dispatch({
        type: types.GET_ALL_CONTACT,
        contacts: listContact
    })
}

export const searchContact = (keySearch) => async dispatch =>{
    console.log(keySearch)
    let result =[]
    if(listContact){
        if(keySearch&&keySearch.length>0){
            result=listContact.filter(
                item=>item.name.toLowerCase().trim().indexOf(keySearch.toLowerCase().trim())>=0 || 
                        item.phone.toLowerCase().trim().indexOf(keySearch.toLowerCase().trim())>=0)
        }
        else{
            result=listContact
        }
    }
    console.log(result)
    dispatch({
        type: types.SEARCH_CONTACT,
        contacts: result
    })
}