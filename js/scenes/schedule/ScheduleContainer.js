import React, {Component} from 'react';
import Schedule from './Schedule'
import PropTypes from 'prop-types'

class ScheduleContainer extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: []
    }
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    return <Schedule data={this.state.data} isLoading={this.state.isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// ScheduleContainer.prototype = {

// }

export default ScheduleContainer;

