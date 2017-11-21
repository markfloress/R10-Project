import React, {Component} from 'react';
import Session from './Session'
import PropTypes from 'prop-types'

class SessionContainer extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: []
    }
  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  render() {
    return <Session data={this.state.data} isLoading={this.state.isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// SessionContainer.prototype = {

// }

export default SessionContainer;

