import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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

  aboutIcon = (<Icon name='ios-information-circle' size={10} color='white' />)

  render() {
    return ( 
      <TabNavigation
        id='main'
        navigatorUID='main'
        initialTab='about'>
        <TabItem
          id='about'         
          title='About'
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          //  selectedStyle={styles.selectedTab}
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

  renderIcon(iconName, isSelected){
    return(
      <Icon name={iconName} color={isSelected ? "black" : '#999999'} size={25}/>
    )
  }
}

export default NavigationLayout;