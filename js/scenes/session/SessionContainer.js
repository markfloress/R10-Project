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

  static propTypes = {
    dispatch: PropTypes.any.isRequired,
    sessionData: PropTypes.array.isRequired,
    speaker: PropTypes.array.isRequired,
    faveList: PropTypes.array.isRequired,
    isLoading: PropTypes.aany.isRequired
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
    const {sessionData, speaker, faveList, isLoading} = this.props
    return (
      <Session data={sessionData} speaker={speaker} faveList={faveList} isLoading={isLoading}/>
    )
  }
}

function mapStateToProps(state){
  return {
    speaker: state.speakerReducer.speaker,
    faveList: state.faveReducer.faveList,
    isLoading: state.speakerReducer.isLoading
  }
}

export default connect(mapStateToProps)(SessionContainer)

