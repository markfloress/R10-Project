import React, { Component } from 'react'
import { Text, View, StyleSheet, LayoutAnimation, TouchableWithoutFeedback, Animated, Platform, Easing } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import styles from './styles'

class ConductItem extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired
  }

  state = {
    showText: false,
    iconName: Platform.OS === 'ios' ? 'ios-add' : 'md-add',
    rotation: new Animated.Value(0),
    duration: 300
  }

  _toggleConduct = () => {
    LayoutAnimation.easeInEaseOut()
    if(!this.state.showText){
      this.setState({ showText: true })
      this.setState({ iconName: Platform.OS === 'ios' ? 'ios-remove' : 'md-remove' })
    } else {
      this.setState({ showText: false })
      this.setState({ iconName: Platform.OS === 'ios' ? 'ios-add' : 'md-add' })
    }
  }

  _startAnimation(){
    Animated.timing(this.state.rotation, {
      toValue: 1,
      duration: this.state.duration,
      easing: Easing.linear
    }).start(() => {
      this._reset()
      this._toggleConduct()
    })
  }

  _reset(){
    this.setState({
      rotation: new Animated.Value(0)
    })
  }

  render() {
    const spin = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "-180deg"]
    })
    
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this._startAnimation()}>
        <View style={styles.conductTitle}>
          <Animated.View style={{transform:[{ rotate: spin }]}}>
            <Icon name={this.state.iconName} size={25} style={styles.conductIcon}/>
          </Animated.View>
          <Text style={styles.conductText}>{this.props.data.title}</Text>
        </View>
        </TouchableWithoutFeedback>
        {this.state.showText && <Text style={styles.conductDescription}>{this.props.data.description}</Text>}
      </View>
    )
  }
}

export default ConductItem