import React from 'react';
import './about.css';
import { Container, Row, Col } from 'reactstrap';
import aboutImg from "../../assets/images/About-.jpg";

const About = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="about__img">
            <img src={aboutImg} alt="" className="w-100" />
          </div>
        </Col>
        <Col lg="6" md="6">
            <div className="about__content">
                    <h2>DTB INMIGRANTE</h2>
                    <p>Si sientes que el mundo se te viene encima, dejanos ser la fuerza que te hace falta.</p>
                    <p>Te preparamos para triunfar y para alcanzar el sueño americano.</p>
                    <p>No tengas miedo de aprender algo nuevo, ve más allá de tu lenguaje y podrás abrir los ojos a un nuevo horizonte.</p>                    
            </div>
          </Col>
        </Row>
        </Container>
    </section>
  )
}

export default About