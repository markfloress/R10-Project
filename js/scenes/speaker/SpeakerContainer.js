import React, {Component} from 'react';
import Speaker from './Speaker'
import PropTypes from 'prop-types'

class SpeakerContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Speaker',
    }
  }

  render() {
    return <Speaker speaker={this.props.speakerData.speaker}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// SpeakerContainer.prototype = {

// }

export default SpeakerContainer;

