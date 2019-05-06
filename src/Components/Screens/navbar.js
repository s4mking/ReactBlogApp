import React, { Component } from "react";
import { Navbar,Nav,NavItem,MenuItem,NavDropdown,Button,Form,FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class NavbarPage extends Component {

  constructor(props) {
    super(props);
    if(localStorage.getItem('token')!= null){
      this.state = {connected: 1};
    }
    else{
      this.state = {connected: 0};
    }
  }
state = {
  isOpen: false
};
/*
2 questions : 
Comment rediriger d'une page vers l'autre?
Commetn faire un test avec le token pour modifier la vue?
*/
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  if(this.state.connected == 1){
    return (
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Mon super blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/createArticle">Ajouter un article</Nav.Link>
        <NavDropdown title="Mon profil" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Userinfo">Editer mes infos</NavDropdown.Item>
          <NavDropdown.Item href="/updatePassword">Changer mon password</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Disconnect" color='red'>Me déconnecter</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
      );
  }  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Mon super blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/connect">Me connecter</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavbarPage;