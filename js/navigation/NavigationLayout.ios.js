import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import { Text } from 'react-native'

import { Router } from './routes'
import { colors, typography } from '../config/styles'

class NavigationLayout extends Component {
  render() {
    return ( 
      <TabNavigation
        id='main'
        navigatorUID='main'
        initialTab='about'
        tabBarColor='black'>

        <TabItem
          id='schedule'         
          title='Schedule'
          renderTitle={this.renderTitle}
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
          renderTitle={this.renderTitle}
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
          renderTitle={this.renderTitle}
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
          renderTitle={this.renderTitle}
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
      <Icon name={iconName} color={isSelected ? "white" : colors.medGrey} size={25}/>
    )
  }

  renderTitle(isSelected, title){
    return(
      <Text style={{ color: isSelected ? "white" : colors.medGrey, fontFamily: typography.fontMainReg}}> {title} </Text>
    )
  }
}

export default NavigationLayout;