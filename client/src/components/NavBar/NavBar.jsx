import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href="/">&nbsp;금테코&nbsp;</Navbar.Brand>&nbsp;&nbsp;
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Link" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.acmicpc.net/" target="_blank">백준</NavDropdown.Item>
              <NavDropdown.Item href="https://solved.ac/" target="_blank">solved.ac</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/junhodo/KumtecoScoreBoard" target="_blank">GitHub</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
