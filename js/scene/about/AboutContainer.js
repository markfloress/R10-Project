import React, {Component} from 'react';
import About from './About'
import PropTypes from 'prop-types'

class AboutContainer extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount(){
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({ data })
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(){
    if(this.state.data && this.state.isLoading){
      this.setState ({ isLoading: false })
    }
  }

  render() {
    return <About data={this.state.data} isLoading={this.state.isLoading}/>
  }

}

// AboutContainer.prototype = {

// }

export default AboutContainer;

