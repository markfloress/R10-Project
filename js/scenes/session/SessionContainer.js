import React, {Component} from 'react';
import Session from './Session'
import PropTypes from 'prop-types'

import { View } from 'react-native'



class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  render() {
    return (
      <View>
        <Session data={this.props.sessionData}/>
      </View>
    )
  }
}

// SessionContainer.prototype = {

// }

export default SessionContainer;

