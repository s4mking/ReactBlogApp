import React, { Component } from 'react'
import api from '../../Modules/api';

class Create extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        // setInterval(function(){  
        event.preventDefault();
       var data =  '"firstname": "'+ this.refs.name.value+'","lastname": "'+ this.refs.prenom.value +'","email": "'+ this.refs.mail.value +'","password": "'+ this.refs.pass.value +'","password_verif": "'+ this.refs.repass.value +'"'
       api.createUser(data).then((json) => {
        
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
              <input name="name" type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Votre nom" ref="name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputLastName">Votre prénom</label>
              <input name="prenom" type="text" className="form-control" id="exampleInputLastName" aria-describedby="prenomHelp" placeholder="Votre prénom" ref="prenom"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail">Votre adresse mail</label>
              <input name="mail" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Votre mail" ref="mail"/>
            </div>
            <div className="form-group">
              <label for="password">Votre mot de passe</label>
              <input name="pass" type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Votre mot de passe" ref="pass"/>
              <small id="emailHelp" className="form-text text-muted">Votre mot de passe doit contenir au moins 8 charactères avec au moins 1 lettre et 1 chiffre.</small>
            </div>
            <div className="form-group">
              <label for="repass">Vérification du mot de passe</label>
              <input name="repass" type="password" className="form-control" id="repass" aria-describedby="emailHelp" placeholder="Vérification du mot de passe" ref="repass"/>
            </div>
            <input type="submit" value="Submit" />
         </form>
      </div>
         
    )
  }
}

export default Create