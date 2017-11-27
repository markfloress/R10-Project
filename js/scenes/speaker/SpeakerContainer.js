import React, {Component} from 'react';
import Speaker from './Speaker'
import PropTypes from 'prop-types'

class SpeakerContainer extends Component {
  render() {
    return <Speaker speaker={this.props.speakerData.speaker} goBack={this._goBack}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// SpeakerContainer.prototype = {

// }

export default SpeakerContainer;

