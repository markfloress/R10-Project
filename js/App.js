/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import { Router } from './navigation/routes'
import Store from './redux/store'

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
})

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext} router={Router}>
          <StackNavigation 
            navigatorUID='Root'
            id='Root'
            initialRoute={Router.getRoute('layout')}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}