import React, {Component} from 'react'
import { connect } from 'react-redux'
import Session from './Session'
import PropTypes from 'prop-types'

import realm from '../../config/models'
import { View } from 'react-native'
import { getSpeaker } from '../../redux/modules/speaker'
import { getFaveData } from '../../redux/modules/faves'

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  faveUpdates(){
    this.props.dispatch(getFaveData())
  }

  componentDidMount(){
    this.props.dispatch(getSpeaker(this.props.sessionData.speaker))
    this.props.dispatch(getFaveData())
    realm.addListener('change', () => this.faveUpdates())
  } 

  render() {
    return (
      <Session data={this.props.sessionData} speaker={this.props.speaker} faveList={this.props.faveList}/>
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

