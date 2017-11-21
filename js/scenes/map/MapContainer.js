import React, {Component} from 'react';
import Faves from './Faves'
import PropTypes from 'prop-types'

class FavesContainer extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: []
    }
  }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    return <Faves data={this.state.data} isLoading={this.state.isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// FavesContainer.prototype = {

// }

export default FavesContainer;

