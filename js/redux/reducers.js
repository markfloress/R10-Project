import { combineReducers } from 'redux'
import { NavigationProvider } from '@expo/ex-navigation';

export default combineReducers({
  navigation: NavigationProvider
})