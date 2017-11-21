import React, {Component} from 'react';
import Maps from './Maps'
import PropTypes from 'prop-types'

class MapContainer extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: []
    }
  }

  static route = {
    navigationBar: {
      title: 'Maps',
    }
  }

  render() {
    return <Maps data={this.state.data} isLoading={this.state.isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// MapsContainer.prototype = {

// }

export default MapContainer;

