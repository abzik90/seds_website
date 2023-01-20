import React from 'react'
import { Row, Col } from "react-bootstrap";
export const About = () => {
  return (
    <div className='about-us'>
        <Row className='seds-row'>
            <Col>
            <h3>About Us</h3>
                <p>SEDS KZ is a national student-run non-profit organization established in 2021 on a base of Nazarbayev University. SEDS believes in a space-faring civilization and that focusing the enthusiasm of students is the key to humankind's future in space.</p>
            </Col>
        </Row>
        <Row className='seds-row'>
          <Col>
          <b>S</b>upport a network of students interested in space exploration and development<br/>
          <b>E</b>ducate people about the benefits of space exploration<br/>
          <b>D</b>evelop leadership and practical skills through space-related projects and events<br/>
          <b>S</b>hare knowledge,experience and opportunities in the space industry<br/>
          <br/>
          <h3>We create, we share and we explore TOGETHER</h3>
          </Col>
        </Row>
        
    </div>
  )
}
