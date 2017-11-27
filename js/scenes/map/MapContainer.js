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

  static propTypes = {
    navigator: PropTypes.any.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.any.isRequired
  }

  static route = {
    navigationBar: {
      title: 'Maps',
    }
  }

  render() {
    const {data, isLoading} = this.props
    return <Maps data={data} isLoading={isLoading}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

export default MapContainer;

