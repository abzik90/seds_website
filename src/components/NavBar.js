import { useState, useEffect } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const NavBar = () => {
const [activeLink, setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(()=>{
    const onScroll = () => {
        setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
},[])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

  return (
    <Navbar bg="dark" variant="dark" className={scrolled ? "scrolled" : ""}>
          <Container>
              <Navbar.Brand href="#home"><img src={logo} alt = "logo" /></Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="#home" className = {activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("home")}>Main Page</Nav.Link>
                  <Nav.Link href="#program" className = {activeLink === "program" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("program")}>Program</Nav.Link>
                  <Nav.Link href="#for-partners" className = {activeLink === "for-partners" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("for-partners")}>For Partners</Nav.Link>
                  <Nav.Link href="#for-participants" className = {activeLink === "for-participants" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("for-participants")}>For Participants</Nav.Link>
                  <Nav.Link href="#partners" className = {activeLink === "partners" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("partners")}>Partners</Nav.Link>
                  
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                <a href="http://t.me/seds_kz" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://instagram.com/seds.kz" target="_blank"><img src={navIcon2} alt="Icon" /></a>  
                </div>
                <button className="vvd" onClick={() => window.open("https://docs.google.com/forms/d/1BCxtUAZZbqX4aBdXhKZ5309_CYnqFS6rBVUtqbbhbQE/edit")}>Register</button>
              </span>
          </Container>
      </Navbar>
  )
}
