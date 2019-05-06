import React, { Component } from 'react'
import api from '../../Modules/api';

class Article extends Component {

  constructor(props) {
    super(props);
      this.state = {
      article: [],
      user: []
    }

  }

  componentDidMount() {
    const { articleID } = this.props.match.params
    api.getArticle(articleID).then((json) => {
      this.setState({
        article: json.data,
        user: json.data.User
      })
     console.log(this.state.user)
  })
 }
 

  render() {
    var expandedContent;
    if (this.state.expanded) {
        expandedContent = <div>some details</div>;
    }

    return (
      // { this.renderArticles() }
      <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
  <h2 class='card-title'> {this.state.article.title}</h2>
    <p class="card-text">{this.state.article.content}</p>
    
  </div>
  <div class="card-footer text-muted">
   par {this.state.user.lastname} {this.state.user.firstname}
  </div>
</div>
    )
  }
}

export default Article