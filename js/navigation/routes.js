import { createRouter } from '@expo/ex-navigation';

import Layout from './NavigationLayout'
import About from '../scenes/about'
import Schedule from '../scenes/schedule'
import Maps from '../scenes/map'
import Faves from '../scenes/faves'

export const Router = createRouter(() => ({
  // home: () => HomeScreen,
  about: () => About,
  layout: () => Layout,
  schedule: () => Schedule,
  map: () => Maps,
  faves: () => Faves,  
}));