import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
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
    renderBackground: () =>
      titleGradients
  }
}

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
          >
          <StackNavigation
            id='schedule'
            navigatorUID='schedule'
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id='map'         
          title='Map'
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected)}
          >
          <StackNavigation
            id='map'
            navigatorUID='map'
            initialRoute={Router.getRoute('map')}
            defaultRouteConfig={defaultRouteConfig}            
          />
        </TabItem>

        <TabItem
          id='faves'         
          title='Faves'
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
          >
          <StackNavigation
            id='faves'
            navigatorUID='faves'
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}            
          />
        </TabItem>

        <TabItem
          id='about'         
          title='About'
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          >
          <StackNavigation
            id='about'
            navigatorUID='about'
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}            
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