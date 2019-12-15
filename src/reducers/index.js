import { combineReducers } from 'redux'
import chatReducer from './chatReducer'
import contactReducer from './contactReducer'
import popupReducer from './popupReducer'
import transactionHistoriesReducer from './transactionHistoriesReducer'

const appReducer = combineReducers({
    popupReducer,
    chatReducer,
    contactReducer,
    transactionHistoriesReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer