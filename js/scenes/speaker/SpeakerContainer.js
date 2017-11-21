import React, {Component} from 'react';
import Speaker from './Speaker'
import PropTypes from 'prop-types'

class SpeakerContainer extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: []
    }
  }

  static route = {
    navigationBar: {
      title: 'Speaker',
    }
  }

  render() {
    return <Speaker data={this.state.data} isLoading={this.state.isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// SpeakerContainer.prototype = {

// }

export default SpeakerContainer;

