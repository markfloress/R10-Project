import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import About from '../scenes/about'

export const Router = createRouter(() => ({
  // home: () => HomeScreen,
  about: () => About
}));