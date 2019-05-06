import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Disconnect extends Component {

  state = {
    redirect: true
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
   componentDidMount() {
    localStorage.removeItem('token');
  }
 
  render() {
    return (
        <div>
           {this.renderRedirect()}
        </div>
    )
  }
}

export default Disconnect