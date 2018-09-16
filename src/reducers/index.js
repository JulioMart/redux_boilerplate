// Meeting place for all reducers :)
// authReducer, postReducer, clientReducer, ...

import { combineReducers } from 'redux'
import contactReducer from './contactReducer'

export default combineReducers({
  contact: contactReducer
})