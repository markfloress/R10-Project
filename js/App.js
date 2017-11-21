/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import About from './scene/about'



const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen
}));

export default class App extends Component<{}> {
  render() {
    return (
      // <About />
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>HomeScreen!</Text>
        <Text onPress={this._goToAbout}>
          Push about route
        </Text>
      </View>
    )
  }
  _goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about'));
  }
}

class AboutScreen extends React.Component {
 static route = {
   navigationBar: {
     title: 'About',
   }
 }

 render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>AboutScreen!</Text>
        <Text onPress={this._goBackHome}>
          Go back home
        </Text>
      </View>
    )
  }
 
  _goBackHome = () => {
    this.props.navigator.pop();
  }
}