import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <div className="navLinks">
              <a>About Us</a>
              <a>Events</a>
              <a>Our Projects</a>
              <a>Partnership</a>
          </div>
          <p>Ⓒ SEDS, 2023</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://t.me/seds_kz" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://instagram.com/seds.kz" target="_blank"><img src={navIcon2} alt="Icon" /></a>              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
