import { combineReducers } from 'redux'
import { NavigationReducer } from '@expo/ex-navigation';

import conductReducer from './modules/conduct'
import sessionReducer from './modules/session'

export default combineReducers({
  navigation: NavigationReducer,
  conductReducer,
  sessionReducer,
})