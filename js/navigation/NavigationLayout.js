import React, { Component } from 'react';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import { Router } from './routes'

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: true
    }
  }

  render() {
    return ( 
      <TabNavigation
        id='main'
        navigatorUID='main'
        initialTab='about'>
        <TabItem
          id='about'
          title='about'
          //  selectedStyle={styles.selectedTab}
          // renderIcon={(isSeleted) => <Image source={require('./assets/images/home.png')} /> }
          >
          <StackNavigation
            id='about'
            navigatorUID='about'
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;