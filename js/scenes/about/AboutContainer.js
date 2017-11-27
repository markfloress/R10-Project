import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import About from './About'
import { getConduct } from '../../redux/modules/conduct'

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About'
    }
  }

  static propTypes ={
    conduct: PropTypes.any.isRequired,
    isLoading: PropTypes.any.isRequired,
    dispatch: PropTypes.any.isRequired,
    navigator: PropTypes.any.isRequired
  }

  componentDidMount(){
    this.props.dispatch(getConduct())
  }


  render() {
    const {conduct, isLoading} = this.props
    return <About data={conduct} isLoading={isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop()
  }
}

function mapStateToProps(state){
  return {
    conduct: state.conductReducer.conduct,
    isLoading: state.conductReducer.isLoading
  }
}

export default connect(mapStateToProps)(AboutContainer)

