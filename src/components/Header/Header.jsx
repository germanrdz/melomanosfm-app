import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHeadphones } from 'react-icons/fi';

import './header.scss';

const Header = () => (
  <div id="header" className="mb-4">
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="mr-4">
          <Link to="/">
            <FiHeadphones className="mr-1" />
            <h4>MelomanosFM</h4>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </div>
);

export default Header;
