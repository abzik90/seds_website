// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">First-of-its kind 24-hour high-tech championship</span>
                <h3>{`Do not miss your chance to win exclusive prizes and take your skills to entirely new level!`} </h3>
                  <p>24-hour scientific national engineering competition that brings young space enthusiasts to solve space-related cases from international and local companies in the field of aerospace.</p>
                  <button onClick={() => window.open("https://docs.google.com/forms/d/1BCxtUAZZbqX4aBdXhKZ5309_CYnqFS6rBVUtqbbhbQE/edit")}>I Want to participate! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}
