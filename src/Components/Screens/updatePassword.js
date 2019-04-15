import React, { Component } from 'react'
import api from '../../Modules/api';
import {Form,FormControl,Button } from 'react-bootstrap'

class UpdatePassword extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
      profile: []
    }
  }

     handleSubmit(event) {
      // setInterval(function(){  
      event.preventDefault();
      var actualpass=  (this.refs.passactual.value)
      var newpass = (this.refs.newpass.value)
      var repass = (this.refs.repass.value)
     api.updatePassword(actualpass,newpass,repass).then((json) => {
      console.dir(json)
     })
  // },3000) 
  
  }
    
  render() {
      return (
        <div>
         <h1>Changer votre mot de passe</h1>
          <form onSubmit={this.handleSubmit}>        
            <div className="form-group">
              <label for="actualpass">Votre mot de passe actuel</label>
              <input name="passactual" id='actualpass' type="password" className="form-control" placeholder={this.state.profile.lastname} ref="passactual"/>
            </div>
            <div className="form-group">
              <label for="exampleInputLastName">Votre nouveau mot de passe</label>
              <input name="newpass" type="password" className="form-control" placeholder={this.state.profile.firstname} ref="newpass"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail">Confirmation</label>
              <input name="repass" type="password" className="form-control" placeholder={this.state.profile.birthdate} ref="repass"/>
            </div>
            <Button type="submit" variant="success">Modifier</Button>
        </form>
      </div>
    )
  }
}

export default UpdatePassword