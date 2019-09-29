import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './Home.scss';
import { FormattedMessage } from 'react-intl';
import Locales from 'views/components/custom/Locales/';

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Locales/>
        </Row>
        <Row>
          <Col>
            <FormattedMessage id="title.home"/>
            <FontAwesomeIcon icon="home" />
          </Col>
          <Col>
            <Link to="/contact">
              <FormattedMessage id="title.contact"/>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
