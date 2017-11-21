import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/about'
import Layout from './NavigationLayout'
import Schedule from './NavigationLayout'
import Maps from './NavigationLayout'
import Faves from './NavigationLayout'

export const Router = createRouter(() => ({
  // home: () => HomeScreen,
  about: () => About,
  layout: () => Layout,
  schedule: () => Schedule,
  map: () => Maps,
  faves: () => Faves,  
}));