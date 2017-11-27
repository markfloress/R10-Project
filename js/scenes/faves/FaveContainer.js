import React, {Component} from 'react';
import Faves from './Faves'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getFaveData } from '../../redux/modules/faves'
import { getSession } from '../../redux/modules/session'
import { formatSessionData } from '../../lib/sectionList-helpers'

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  static propTypes = {
    dispatch: PropTypes.any.isRequired,
    session: PropTypes.array.isRequired,
    faveList: PropTypes.array.isRequired,
    isLoading: PropTypes.any.isRequired
  }

  faveUpdates(){
    this.props.dispatch(getFaveData())
  }

  componentDidMount(){
    this.props.dispatch(getFaveData())
    this.props.dispatch(getSession())
  }

  render() {
    const { session, faveList, isLoading } = this.props

    const allFaved = session.filter(item => { 
      return faveList.indexOf(item.session_id) >= 0
    })

    const formattedFaves = formatSessionData(allFaved)

    return <Faves faveList={formattedFaves} currentNavigatorUID={'faves'} isLoading={isLoading}/>
  }
}

function mapStateToProps(state){
  return {
    faveList: state.faveReducer.faveList,
    session: state.sessionReducer.session,
    isLoading: state.sessionReducer.isLoading
  }
}

export default connect(mapStateToProps)(FavesContainer);

