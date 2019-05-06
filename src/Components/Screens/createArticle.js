import React, { Component } from 'react'
import api from '../../Modules/api';
import {Form,FormControl,Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'


class createArticle extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {creation: 0};

        api.getCategories().then((json) => {
          var options = []
          {json.data.map((article) => {
            options.push({value : article.id,label:article.name})
          }
          
          )}
          this.setState({options})
         })
      }
      state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // console.log(`Option selected:`, selectedOption);
      }
      
      handleSubmit(event) {
        event.preventDefault();
        var title =  (this.refs.title.value)
        var content = (this.refs.content.value)
        var category = (this.state.selectedOption.value)
       
       api.createArticle(title,content,category).then((json) => {
         console.log(json)
        this.state = {creation:1}
       })    
    }
    
  render() {
    const { selectedOption,options } = this.state;
    if(this.state.creation!==0){
      return <Redirect to='/' />
    }
    return (
      <div className="col-12 col-lg-6 offset-lg-3">
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
          <Select ref="cat"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
       </div>
       <button className="btn btn-primary float-right">Créer</button>
        
      </form>
    </div>
       
    )
  }
}

export default createArticle