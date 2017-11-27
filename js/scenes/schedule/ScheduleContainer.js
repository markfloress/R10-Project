import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Schedule from './Schedule'
import { Router } from '../../navigation/routes'
import { getSession } from '../../redux/modules/session'
import { getFaveData } from '../../redux/modules/faves'
import { formatSessionData } from '../../lib/sectionList-helpers'


class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  
  componentDidMount(){
    this.props.dispatch(getSession())
    this.props.dispatch(getFaveData())
  }

  render() {
    const formattedSession = formatSessionData(this.props.session)
    return <Schedule data={formattedSession} faveList={this.props.faveList} />
  }
}

// ScheduleContainer.prototype = {

// }

function mapStateToProps(state){
  return {
    session: state.sessionReducer.session,
    faveList: state.faveReducer.faveList
  }
}

export default connect(mapStateToProps)(ScheduleContainer)

