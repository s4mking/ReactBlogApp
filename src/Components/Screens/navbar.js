import React, { Component } from "react";
import { Navbar,Nav,NavItem,MenuItem,NavDropdown,Button,Form,FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Mon super blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/createArticle">Ajouter un article</Nav.Link>
      <Nav.Link href="/connect">Me connecter</Nav.Link>
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
  }
}

export default NavbarPage;