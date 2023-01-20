import { useState, useEffect } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/img/logo_seds.svg";
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
                  <Nav.Link href="#about-us" className = {activeLink === "about-us" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("about-us")}>About us</Nav.Link>
                  <Nav.Link href="#events" className = {activeLink === "events" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("events")}>Events</Nav.Link>
                  <Nav.Link href="#our-projects" className = {activeLink === "our-projects" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("our-projects")}>Our Projects</Nav.Link>
                  <Nav.Link href="#partnership" className = {activeLink === "partnership" ? "active navbar-link" : "navbar-link"} onClick = {() => onUpdateActiveLink("partnership")}>Partnership</Nav.Link>                  
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                <a href="http://t.me/seds_kz" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://instagram.com/seds.kz" target="_blank"><img src={navIcon2} alt="Icon" /></a>  
                </div>
              </span>
          </Container>
      </Navbar>
  )
}
