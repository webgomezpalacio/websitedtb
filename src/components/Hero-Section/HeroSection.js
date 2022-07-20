import React from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import  './hero-section.css'

const HeroSection = () => {
  return (
          <section>
            <Container>
                <Row>
                  <Col lg="12" md="12">
                        <div className='hero_content'>
                        </div>
                    </Col>
                </Row>
            </Container>


    </section>
  )
}

export default HeroSection