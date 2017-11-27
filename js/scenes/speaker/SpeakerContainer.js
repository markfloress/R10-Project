import React, {Component} from 'react';
import Speaker from './Speaker'
import PropTypes from 'prop-types'

class SpeakerContainer extends Component {
  static propTypes = {
    speakerData: PropTypes.any.isRequired,
    navigator: PropTypes.any.isRequired
  }

  render() {
    const {speakerData} = this.props
    return <Speaker speaker={speakerData.speaker} goBack={this._goBack}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

export default SpeakerContainer;

