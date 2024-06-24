import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="footer-content text-center">
          {/* <p>&copy; {new Date().getFullYear()} MAE. ALL RIGHTS RESERVED.</p> */}
          <ul className="list-inline social-icons">
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
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
