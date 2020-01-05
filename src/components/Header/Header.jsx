import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiHeadphones } from 'react-icons/fi';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

import Avatar from '../Avatar/Avatar';
import { userPropType } from '../../constants/custom-proptypes';
import { logoutUser } from '../../redux/session';
import { storage } from '../../services/storage';

import './header.scss';

const Header = ({ user, logoutUserAction }) => {
  const logoutClickHandler = () => {
    storage.clear();
    logoutUserAction();
  };

  return (
    <div id="header" className="mb-4">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mr-4">
            <Link to="/">
              <FiHeadphones className="mr-1" />
            </Link>
          </Navbar.Brand>
          {
            user
            && (
              <Nav>
                <NavDropdown className="dropleft" title={<Avatar user={user} height={20} />}>
                  <NavDropdown.Item disabled>{user.name}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutClickHandler}>Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )
          }
        </Container>
      </Navbar>
    </div>
  );
};

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  user: userPropType,
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
