import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Requirements = () => {
  return (
    <section className="Requirements">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            
                <h2>Requirements</h2>
                    <p>Can not wait to register?!<a href={""}> Wait! </a>Make sure you fulfill requirements</p>
                    <ul className="goals-list">
                        <li><span>Team of 5 or join us as a single Cosmothonian</span></li>
                        <li><span>At least 1 member speaks English fluently</span></li>
                        <li><span>At least 1 member is female</span></li>
                    </ul>
                 
              </div>}
            </TrackVisibility>
        </Col>
          <Col xs={12} md={6} xl={5}>
            
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}

export default Requirements