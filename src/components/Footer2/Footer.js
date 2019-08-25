import React from "react";

import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import {
  faLinkedinIn,
  faGithub,
  faSkype,
  faResearchgate
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterItemIcon = props => (
  <div className="footer__social-links">
    <a href={props.link}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  </div>
);

const FooterItemSocialLinks = props => (
  <div>
    <Row>
      <Col md={{ span: 12 }} xs={{ span: 12 }}>
        <div className="footer__social-links">Social Links</div>
      </Col>
    </Row>
    <Row>
      <Col lg={{ span: 1 }} xs={{ span: 2 }}>
        <p className="text-center">
          <FooterItemIcon link="https://github.com/ahedayat" icon={faGithub} />
        </p>
      </Col>
      <Col lg={{ span: 1 }} xs={{ span: 2 }}>
        <p className="text-center">
          <FooterItemIcon
            link="https://www.linkedin.com/in/alihedayatnia"
            icon={faLinkedinIn}
          />
        </p>
      </Col>
      <Col md={{ offset: 0, span: 1 }} xs={{ offset: 3, span: 2 }}>
        <div>
          <p className="text-center">
            <FooterItemIcon
              link="https://www.researchgate.net/profile/Ali_Hedayatnia"
              icon={faResearchgate}
            />
          </p>
        </div>
      </Col>
      <Col md={{ offset: 0, span: 1 }} xs={{ offset: 3, span: 2 }}>
        <div>
          <p className="text-center">
            <FooterItemIcon link="skype:a.hedayat.m" icon={faSkype} />
          </p>
        </div>
      </Col>
    </Row>
  </div>
);

const FooterItemEmail = props => (
  <div>
    <Row>
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
        <div className="footer__items-title">{props.title}</div>
      </Col>
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
        <div className="footer__items-content">
          <a href={props.link}>{props.email}</a>
        </div>
      </Col>
    </Row>
  </div>
);

const FooterItemAddress = props => (
  <div>
    <Row>
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
        <div className="footer__items-title">{props.title}</div>
      </Col>
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
        <div className="footer__items-content">
          <a href={props.link}>{props.address}</a>
        </div>
      </Col>
    </Row>
  </div>
);

const footer = props => (
  <div className="footer">
    <Container>
      <Row>
        <Col
          lg={{ offset: 1, span: 2 }}
          className="footer__contact text-center"
        >
          Contact
        </Col>
        <Col lg={{ offset: 1, span: 4 }} className="footer__item">
          <Row>
            <Col>
              <FooterItemEmail
                title="Email"
                email="a.hedayat.m@gmail.com"
                link="mailto:a.hedayat.m@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FooterItemEmail
                title="Academic Email"
                email="alihedayatnia@ut.ac.ir"
                link="mailto:alihedayatnia@ut.ac.ir"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FooterItemAddress
                title="Address"
                address="Ghayen, Iran"
                link="https://www.google.com/maps/place/Ghayen,+South+Khorasan+Province/data=!4m2!3m1!1s0x3f10f9647f7b3195:0x572f5ec0e06b5c2c?sa=X&ved=2ahUKEwjdu4yOlv3jAhVB6KQKHaB9AUIQ8gEwFHoECAwQBA"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={{ offset: 0, span: 4 }}>
          <FooterItemSocialLinks />
        </Col>
      </Row>
    </Container>
  </div>
);

export default footer;
