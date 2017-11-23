import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import { Text } from 'react-native'

import { Router } from './routes'
import { colors, typography } from '../config/styles'

class NavigationLayout extends Component {
  render() {
    return ( 
      <DrawerNavigation
        id='schedule'
        initialItem='schedule'>

        <DrawerNavigationItem
          id='schedule'         
          title='Schedule'
          renderTitle={(isSelected) => this.renderTitle(isSelected, 'Schedule')}
          renderIcon={(isSelected) => this.renderIcon("ios-calendar", isSelected)}
          //  selectedStyle={styles.selectedTab}
          >
          <StackNavigation
            id='schedule'
            navigatorUID='schedule'
            initialRoute={Router.getRoute('schedule')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='map'         
          title='Map'
          renderTitle={(isSelected) => this.renderTitle(isSelected, 'Map')}
          renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected)}
          //  selectedStyle={styles.selectedTab}
          >
          <StackNavigation
            id='map'
            navigatorUID='map'
            initialRoute={Router.getRoute('map')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='faves'         
          title='Faves'
          renderTitle={(isSelected) => this.renderTitle(isSelected, 'Faves')}
          renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
          //  selectedStyle={styles.selectedTab}
          >
          <StackNavigation
            id='faves'
            navigatorUID='faves'
            initialRoute={Router.getRoute('faves')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='about'         
          title='About'
          renderTitle={(isSelected) => this.renderTitle(isSelected, 'About')}
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          //  selectedStyle={styles.selectedTab}
          >
          <StackNavigation
            id='about'
            navigatorUID='about'
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }

  renderIcon(iconName, isSelected){
    return(
      <Icon name={iconName} color={isSelected ? "black" : colors.medGray} size={25}/>
    )
  }

  renderTitle(isSelected, title){
    return(
      <Text style={{ color: isSelected ? "black" : colors.medGray, fontFamily: typography.fontMainReg}}> {title} </Text>
    )
  }
}

export default NavigationLayout;