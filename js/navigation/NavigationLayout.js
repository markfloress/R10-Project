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

  render() {
    return ( 
      <TabNavigation
        id='main'
        navigatorUID='main'
        initialTab='about'>

        <TabItem
          id='schedule'         
          title='Schedule'
          renderIcon={(isSelected) => this.renderIcon("ios-calendar", isSelected)}
          //  selectedStyle={styles.selectedTab}
          >
          <StackNavigation
            id='schedule'
            navigatorUID='schedule'
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id='map'         
          title='Map'
          renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected)}
          //  selectedStyle={styles.selectedTab}
          >
          <StackNavigation
            id='map'
            navigatorUID='map'
            initialRoute={Router.getRoute('map')}
          />
        </TabItem>

        <TabItem
          id='faves'         
          title='Faves'
          renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
          //  selectedStyle={styles.selectedTab}
          >
          <StackNavigation
            id='faves'
            navigatorUID='faves'
            initialRoute={Router.getRoute('faves')}
          />
        </TabItem>

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