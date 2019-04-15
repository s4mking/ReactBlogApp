import React, { Component } from 'react'
import api from '../../Modules/api';

class Articles extends Component {

  constructor(props) {
    super(props);
      this.state = {
      articles: []
    }

  }

  componentDidMount() {
    api.getAllArticles().then((json) => {
      console.dir(json)
      this.setState({
        articles: json.data
      })
  })
 }

  render() {
    return (
      // { this.renderArticles() }
      <div>
         {this.state.articles.map((article) => {
        return (
          <div>
            {/* <h2><a href='/article/'+{article.id}>{article.title}</a></h2> */}
            <h2>{article.title}</h2>
            <h3>{article.User.firstname}</h3>
            <p>{article.content}</p>
          </div>
        )
      } )}
      </div>
     
    )
  }
}

export default Articles