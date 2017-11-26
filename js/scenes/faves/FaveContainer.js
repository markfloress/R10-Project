import React, {Component} from 'react';
import Faves from './Faves'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import realm from '../../config/models'
import { getFaveData } from '../../redux/modules/faves'
import { getSession } from '../../redux/modules/session'
import { formatSessionData } from '../../lib/sectionList-helpers'

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  faveUpdates(){
    this.props.dispatch(getFaveData())
  }

  componentDidMount(){
    this.props.dispatch(getFaveData())
    this.props.dispatch(getSession())    
    realm.addListener('change', this.faveUpdates)
  }

  componentWillUnmount(){
    realm.removeListener('change', this.faveUpdates)
  }

  render() {
    const { session, faveList } = this.props

    const allFaved = session.filter(item => { 
      return faveList.indexOf(item.session_id) >= 0
    })

    const formattedFaves = formatSessionData(allFaved)

    return <Faves faves={formattedFaves}/>
  }
}

// FavesContainer.prototype = {

// }

function mapStateToProps(state){
  return {
    faveList: state.faveReducer.faveList,
    session: state.sessionReducer.session
  }
}

export default connect(mapStateToProps)(FavesContainer);

