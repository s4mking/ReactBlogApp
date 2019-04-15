import React, { Component } from 'react'
import api from '../../Modules/api';
import { Redirect } from 'react-router-dom'

class Create extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) { 
        event.preventDefault();
        var mail =  (this.refs.mail.value)
        var password = (this.refs.pass.value)
        api.connectUser(mail,password).then((response) => {
        console.dir(response.data.token)
        localStorage.setItem('token', 'Bearer '+response.data.token);
        return <Redirect to='/' />
     })           
    }
    
  render() {
    return (
        <div>
         <h1>Connexion du compte</h1>
         <form onSubmit={this.handleSubmit}>        
          <div className="form-group">
            <label for="exampleInputEmail">Votre adresse mail</label>
            <input name="mail" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Votre mail" ref="mail"/>
          </div>
          <div className="form-group">
            <label for="password">Votre mot de passe</label>
            <input name="pass" type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Votre mot de passe" ref="pass"/>
            <small id="emailHelp" className="form-text text-muted">Votre mot de passe doit contenir au moins 8 charactères avec au moins 1 lettre et 1 chiffre.</small>
          </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default Create