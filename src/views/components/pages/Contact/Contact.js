import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './Contact.scss';
import { FormattedMessage } from 'react-intl';
import Locales from 'views/components/custom/Locales/Locales';
import { default as  FormContact } from 'views/components/forms/Contact/Contact';

function Contact() {
  return (
    <div>
      <Container>
        <Row>
          <Locales/>
        </Row>
        <Row>
          <Col>
            <FormattedMessage id="title.contact"/>
          </Col>
          <Col>
            <Link to="/">
              <FormattedMessage id="title.home"/>
            </Link>
          </Col>
        </Row>
        <Row>
          <FormContact/>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
