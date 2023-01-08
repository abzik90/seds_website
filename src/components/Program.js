import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Program = () => {
  return (
    <section className="Program">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}></Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            
                <h2>Program</h2>
                <table>
                <tr><td>Registration opens</td><td>00:00, January 9</td></tr>
                <tr><td>Registration closes</td><td>00:00, January 18</td></tr>
                <tr><td>Matching Single Participants</td><td>13:00 January 19</td></tr>
                <tr><td>Revealing Case Topics</td><td>14:00, January 20</td></tr>
                <tr><td>Opening Ceremony</td><td>9:30, January  21</td></tr>
                <tr><td>Submission of a Solution</td><td>11:00, January  21</td></tr>
                <tr><td>Award Ceremony</td><td>15:00, January  22</td></tr>
                </table>
                 
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}

export default Program