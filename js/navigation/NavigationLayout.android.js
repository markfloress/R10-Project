import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Router } from './routes'
import { colors, typography } from '../config/styles'

const titleGradients = 
<LinearGradient
  start={{x: 0.9, y: 0}} 
  end={{x: 0.3, y: 1.0}}
  locations={[0,1]}
  colors={[colors.purple, colors.red]}
  style={{flex: 1}}>
</LinearGradient>

const defaultRouteConfig = {
navigationBar: {
tintColor: 'white',
titleStyle: {fontFamily: typography.fontMainReg},
drawUnderNavBar: true,
renderBackground: () =>
  titleGradients
}
}

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
          >
          <StackNavigation
            id='schedule'
            navigatorUID='schedule'
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='map'         
          title='Map'
          renderTitle={(isSelected) => this.renderTitle(isSelected, 'Map')}
          renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected)}
          >
          <StackNavigation
            id='map'
            navigatorUID='map'
            initialRoute={Router.getRoute('map')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='faves'         
          title='Faves'
          renderTitle={(isSelected) => this.renderTitle(isSelected, 'Faves')}
          renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
          >
          <StackNavigation
            id='faves'
            navigatorUID='faves'
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='about'         
          title='About'
          renderTitle={(isSelected) => this.renderTitle(isSelected, 'About')}
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          >
          <StackNavigation
            id='about'
            navigatorUID='about'
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
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