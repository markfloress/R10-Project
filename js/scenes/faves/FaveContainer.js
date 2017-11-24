import React, {Component} from 'react';
import Faves from './Faves'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { queryFave } from '../../config/models'
import { getFaveData } from '../../redux/modules/faves'

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  componentDidMount(){
    console.log('success did mount')
    this.props.dispatch(getFaveData())
  }

  render() {
    console.log('props',this.props)
    return <Faves faves={queryFave().map(x => x.id)}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// FavesContainer.prototype = {

// }

function mapStateToProps(state){
  return {
    faveList: state.faveReducer.faveList
  }
}

export default connect(mapStateToProps)(FavesContainer);

