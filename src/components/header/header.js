import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';

import '/Users/caden/Developer/web_developer/react/my-app/src/assets/css/header(minified).css';

 
class Header extends Component {
  render() {
    return (
      <header >
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
                 <a href="#brand" id='BRAND'>TESLA</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav id="centerLinks">
              <NavItem eventKey={1} href="#">
                <a href='#'>MODEL S</a>
              </NavItem>
              <NavItem eventKey={2} href="#">
              <a href='#'>MODEL x</a>
              </NavItem>
              <NavItem eventKey={3} href="#">
              <a href='#'>MODEL 3</a>
              </NavItem>
              <NavItem eventKey={4} href="#">
              <a href='#'>ROADSTER</a>
              </NavItem>
              <NavItem eventKey={3} href="#">
              <a href='#'>ENERGY</a>
              </NavItem>
            </Nav>

            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                SHOP
              </NavItem>
              <NavItem eventKey={2} href="#">
                SIGN IN
              </NavItem>
              <NavDropdown eventKey={3} title="BUTT" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}//End Header

export default Header;
