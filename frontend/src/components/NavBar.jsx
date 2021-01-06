import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NavBar = () => {

  return (
    <div>
      <Navbar collapseOnSelect  bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">&nbsp;금테코&nbsp;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink href="/">Home</NavLink>
            <NavDropdown title="Link" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.acmicpc.net/" target="_blank">백준</NavDropdown.Item>
              <NavDropdown.Item href="https://solved.ac/" target="_blank">solved.ac</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/" target="_blank">GitHub</NavDropdown.Item>
            </NavDropdown>
            {/* <NavLink href="/about">About</NavLink> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;