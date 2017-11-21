import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/about'
import Layout from './NavigationLayout'

export const Router = createRouter(() => ({
  // home: () => HomeScreen,
  about: () => About,
  layout: () => Layout
}));