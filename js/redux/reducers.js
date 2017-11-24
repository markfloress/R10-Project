import { combineReducers } from 'redux'
import { NavigationReducer } from '@expo/ex-navigation';

import conductReducer from './modules/conduct'
import sessionReducer from './modules/session'
import speakerReducer from './modules/speaker'
import faveReducer from './modules/faves'

export default combineReducers({
  navigation: NavigationReducer,
  conductReducer,
  sessionReducer,
  speakerReducer,
  faveReducer
})