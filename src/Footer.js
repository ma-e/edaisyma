import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light py-1">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="text-left">
              &copy; {new Date().getFullYear()} MÆ. All rights reserved.            
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="text-right">
            <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/m-483936232/">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/ma-e">
                  <FaGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
              </li>
            </div>
          </Col>
        </Row>
        {/* <hr className="my-4" /> */}
      </Container>
    </footer>
  );
}

export default Footer;

