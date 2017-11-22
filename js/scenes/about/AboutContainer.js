import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import About from './About'
import { getConduct } from '../../redux/modules/conduct';

class AboutContainer extends Component {

  componentDidMount(){
    this.props.dispatch(getConduct())
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    return <About data={this.props.conduct} isLoading={this.props.isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop()
  }
}

// AboutContainer.prototype = {

// }

function mapStateToProps(state){
  return {
    conduct: state.conductReducer.conduct,
    isLoading: state.conductReducer.isLoading
  }
}

export default connect(mapStateToProps)(AboutContainer);

