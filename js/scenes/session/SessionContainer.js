import React, {Component} from 'react'
import { connect } from 'react-redux'
import Session from './Session'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { getSpeaker } from '../../redux/modules/speaker'
import { getFaveData } from '../../redux/modules/faves'

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentDidMount(){
    this.props.dispatch(getSpeaker(this.props.sessionData.speaker))
    this.props.dispatch(getFaveData())
  }

  render() {
    return (
      <View>
        <Session data={this.props.sessionData} speaker={this.props.speaker} faveList={this.props.faveList}/>
      </View>
    )
  }
}

// SessionContainer.prototype = {

// }

function mapStateToProps(state){
  return {
    speaker: state.speakerReducer.speaker,
    faveList: state.faveReducer.faveList
  }
}

export default connect(mapStateToProps)(SessionContainer)

