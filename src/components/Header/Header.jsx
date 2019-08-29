import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHeadphones } from 'react-icons/fi';

import { userPropType } from '../../constants/custom-proptypes';
import { logoutUser } from '../../ducks/session';
import { storage } from '../../services/storage';

import './header.scss';

const Header = ({ user, logoutUserAction }) => {
  const logoutClickHandler = () => {
    storage.clear();
    logoutUserAction();
  };

  return (
    <div id="header" className="mb-4">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="mr-4">
            <Link to="/">
              <FiHeadphones className="mr-1" />
              <h4>MelomanosFM</h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              {
                user
                && (
                  <Navbar.Text>
                    <strong>{user.name}</strong>
                    <img className="ml-1 rounded-circle" height="20" src={user.image} alt={user.name} />
                    <small>
                      <Nav.Link onClick={logoutClickHandler}>
                        (Logout)
                      </Nav.Link>
                    </small>
                  </Navbar.Text>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  user: userPropType.isRequired,
  logoutUserAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(
  mapStateToProps,
  {
    logoutUserAction: logoutUser,
  },
)(Header);
