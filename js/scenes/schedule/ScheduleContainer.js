import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Schedule from './Schedule'
import { Router } from '../../navigation/routes'
import { getSession } from '../../redux/modules/session'


class ScheduleContainer extends Component {

  componentDidMount(){
    this.props.dispatch(getSession())
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    return <Schedule data={this.props.session}/>
  }
}

// ScheduleContainer.prototype = {

// }

function mapStateToProps(state){
  return {
    session: state.sessionReducer.session
  }
}

export default connect(mapStateToProps)(ScheduleContainer)

