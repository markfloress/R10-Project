import React, {Component} from 'react';
import Faves from './Faves'
import PropTypes from 'prop-types'

import { queryFave } from '../../config/models'

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    return <Faves faves={queryFave().map(x => x.id)}/>
  }

  _goBack = () => {
    this.props.navigator.pop();
  }
}

// FavesContainer.prototype = {

// }

export default FavesContainer;

