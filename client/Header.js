import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar staticTop>
          <Nav>
            <NavItem>
              <Link to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about">
                About us
              </Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
