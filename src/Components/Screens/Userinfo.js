import React, { Component } from 'react'
import api from '../../Modules/api';
import {Form,FormControl,Button } from 'react-bootstrap'
import Moment from 'moment';

class Userinfo extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
      profile: []
    }
  }


      componentDidMount(){
        api.getUserInformation().then((json) => {
          console.dir(json.data)
          this.setState({
            profile: json.data
          })
      })
     }
     handleSubmit(event) {
      // setInterval(function(){  
      event.preventDefault();
      var title =  (this.refs.name.value)
      var content = (this.refs.prenom.value)
      var date = (this.refs.date.value)
     api.updateUser(title,content,date).then((json) => {
      console.dir(json)
     })
  // },3000) 
  
  }
    
  render() {
      return (
        <div>
         <h1>Création du compte</h1>
          <form onSubmit={this.handleSubmit}>        
            <div className="form-group">
              <label for="exampleInputName">Votre nom</label>
              <input name="name" type="text" className="form-control" placeholder={this.state.profile.lastname} ref="name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputLastName">Votre prénom</label>
              <input name="prenom" type="text" className="form-control" placeholder={this.state.profile.firstname} ref="prenom"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail">Votre date de naissance</label>
             
              <input name="date" type="date" className="form-control" placeholder={Moment(this.state.profile.birthdate).format('DD/MM/YYYY')} ref="date"/>
            </div>
            <Button type="submit" variant="success">Modifier</Button>
        </form>
      </div>
    )
  }
}

export default Userinfo