import React, { Component } from 'react'
import { Navbar,Nav,NavItem,MenuItem,NavDropdown,Button,Form,FormControl } from 'react-bootstrap'
import api from '../../Modules/api';
import { builtinModules } from 'module';
// import { Collapse, CardBody, Card } from 'reactstrap';
import CreateArticle from './createArticle';

class Articles extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
      this.state = {
      articles: [],
      collapse: false 
    }

  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
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
    var expandedContent;
    if (this.state.expanded) {
        expandedContent = <div>some details</div>;
    }
    return (


      <div className="container">
       {/* <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
           
            </CardBody>
          </Card>
        </Collapse>
      </div>
           */}
           <CreateArticle/>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">My little tiny blog</h1>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
          {this.state.articles.map((article) => {
              return (
                <div className="card my-3">
                  <div className="card-header">
                  {article.title.substr(0,50)}
                  </div>
                  <div className="card-body">
                  {article.content.substr(0,100)+'...'}
                  </div>
                  <div className="card-footer">
                    <i>{article.User.firstname.substr(0,20)}
                      <p className="float-right">
                        {new Date(article.created_at).toLocaleDateString()}
                      </p>
                    </i>
                    <Nav.Link  href={`/articles/${article.id}`}><button 
   type="button" className="btn btn-outline-secondary">Lire la suite</button></Nav.Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      // { this.renderArticles() }
     
    )
    
  }
}

export default Articles