import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Articles from './Components/Screens/Articles'
import Article from './Components/Screens/Article'
import Connect from './Components/Screens/Connect'
import updatePassword from './Components/Screens/updatePassword'
import createArticle from './Components/Screens/createArticle'
import Create from './Components/Screens/Create'
import Userinfo from './Components/Screens/Userinfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './Components/Screens/navbar'
import Disconnect from './Components/Screens/Disconnect'
//ComponentWillUnmount quand la vue va disparaitre ou didmount quand la vue va apparaitre

class App extends Component {
 
  render() {
    return (
      
        <Router>
          <div>
            <Route path={'/'} component={NavbarPage} />
            <div className='container'>
              <Route exact path={'/'} component={Articles} />
              <Route path={'/create'} component={Create} />
              <Route path={'/connect'} component={Connect} />
              <Route path={'/articles/:articleID'} component={Article} />
              <Route path={'/userInfo'} component={Userinfo} />
              <Route path={'/updatePassword'} component={updatePassword} />
              <Route path={'/createArticle'} component={createArticle} />
              <Route path={'/disconnect'} component={Disconnect} />
            </div>
          </div>
        </Router>
    );
  }
}
export default App;