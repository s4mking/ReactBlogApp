import React, { Component } from 'react'
import api from '../../Modules/api';
import {Form,FormControl,Button } from 'react-bootstrap'

class createArticle extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        // setInterval(function(){  
        event.preventDefault();
        var title =  (this.refs.title.value)
        var content = (this.refs.content.value)
        var category = (this.refs.cat.value)
       api.createArticle(title,content,category).then((json) => {
        console.dir(json)
       })
    // },3000) 
    
    }
    
  render() {
    return (
    <div>
        <h1>Création d'un article</h1>
         <form onSubmit={this.handleSubmit}>        
          <div className="form-group">
            <label for="exampleInputName">Votre titre</label>
            <input name="title" type="text" className="form-control" placeholder="Titre de l'article" ref="title"/>
          </div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Votre contenu</Form.Label>
            <Form.Control as="textarea"  placeholder="Votre contenu" ref="content" name="content" rows="3" />
         </Form.Group>
          <div className="form-group">
            <label for="exampleInputEmail">Votre catégorie</label>
            <input name="cat" type="text" className="form-control" placeholder="Votre catégorie" ref="cat"/>
          </div>
          <Button type="submit" variant="success">Créer mon article</Button>
        
      </form>
    </div>
       
    )
  }
}

export default createArticle