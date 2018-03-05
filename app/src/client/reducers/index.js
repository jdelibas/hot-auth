import { combineReducers } from 'redux'

import route from './route'
import search from './search'
import modals from './modals'
import tokens from './tokens'

export default combineReducers({
  route,
  search,
  modals,
  tokens
})
