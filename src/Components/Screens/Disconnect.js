import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Disconnect extends Component {

   componentDidMount() {
    localStorage.removeItem('token');
  }
 
  render() {
    return (
        <div>
            return <Redirect to='/' />
        </div>
    )
  }
}

export default Disconnect