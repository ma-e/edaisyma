import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* <Row className="align-items-center"> */}
          {/* <Col xs={12} md={8}> */}
            <div className="text-center">
              &copy; {new Date().getFullYear()} MAE. ALL RIGHTS RESERVED.            
            </div>
          {/* </Col> */}
          {/* <Col xs={12} md={4}> */}
            <div className="text-center">
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
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    </footer>
  );
}

export default Footer;

