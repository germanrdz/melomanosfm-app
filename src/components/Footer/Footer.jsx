import React from 'react';
import { Container } from 'react-bootstrap';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <Container className="d-md-flex justify-content-md-between">
      <div>
        <small className="text-muted pr-1">MelomanosFM</small>
      </div>
      <div>
        <small className="text-muted">® 2019 MelomanosFM.</small>
      </div>
    </Container>
  </div>
);

export default Footer;
