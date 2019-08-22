import React from 'react';
import { Container, Image } from 'react-bootstrap';

import './footer.scss';

class Footer extends React.Component {
  render() {

    return (
      <div className="footer position-absolute">
        <Container className="d-md-flex justify-content-md-between">
          <div>
            <small className="text-muted pr-1">MelomanosFM</small>
          </div>
          <div>
            <small className="text-muted">® 2019 MelomanosFM.</small>
          </div>
        </Container>
      </div>
    )
  }
}

export default Footer;
