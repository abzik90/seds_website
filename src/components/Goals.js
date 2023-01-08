import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';


export const Goals = () => {
  return (
    <section className="Goals">
      <Container>
        <Row>
        <Col xs={12} md={6} xl={5}></Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            
                <h2>Our Goals</h2>
                    <ol className="goals-list">
                        <li><span>Contribute to expansion of aerospace industry</span></li>
                        <li><span>Create a competetive environment between students and engineering specialities in Kazakhstan.</span></li>
                        <li><span>Develop future science leaders</span></li>
                    </ol>
                 
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}
