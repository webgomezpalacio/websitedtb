import React from 'react'
import { Container, Row, Col } from "reactstrap";
import './pages.css'
import imgBeneflex from '../../assets/images/BENEFLEX-01.jpg';
import imgaBeneflex from '../../assets/images/BENEFLEX-02.jpg';
import Slider from "react-slick";

const Beneflex = () => {
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      };
  return (
    <>
    <section className='beneflex-hero'>
      <div className='beneflex-container'>
      </div>
    </section>
    <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="about__img">
            <img src={imgBeneflex} alt="" className="w-100" />
          </div>
        </Col>
        <Col lg="6" md="6">
            <div className="about__content">
                    <h2>DTB INMIGRANTE</h2>
                    <p>
                    Si usted es candidato al programa en base a los parámetros del mismo tendra que agendar la cita en el momento de su consulta ya que esta oportunidad no sera re-agendable. Después de su consulta un compañero o compañera se estará comunicando con usted para hacer de su conocimiento todos los beneficios que el programa trae consigo, es importante poder atender esta llamada, mensaje o email, ya que las solicitudes que hemos recibido han sido un número considerable y para poder respetar su tiempo es importante contestar a la brevedad, ya que puede ser que esta oportunidad no se le vuelva a presentar.
                    </p>
                </div>
          </Col>
        </Row>
        </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={imgaBeneflex} alt="" className="w-100" />
              </div>
              <div className="testimonial__content w-50">
                <h2 className="mb-4">BENEFLEX</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      ¿Qué más necesitas? <br /> Beneflex está aquí
                      </h6>
                      <p>No existe salida fácil, pero sí un mejor modo de iniciar.</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      ¿Aún no conoces Beneflex? <br /> Es tiempo de hacerlo
                      </h6>
                      <p>Un beneficio más creado pensando en ti tenemos todos los beneficios y la flexibilidad para tu caso.</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      	Beneflex se adapta a tus necesidades 
                      </h6>
                      <p>No lo pienses más, decídete ahora <br /> Beneflex: Tu beneficio flexible No hay más excusas, comienza hoy.</p>    
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
    <Container>
      <Row>
        <Col lg="12" md="12">
            <div className="about__content">
                    <i className='h2footer'>Beneflex: Josué 1:9 </i>
                    <p>Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes,
                      porque Jehová tu Dios estará contigo dondequiera que vayas”</p>                    
            </div>
          </Col>
        </Row>
        </Container>
    </section>

  </>
  )
}

export default Beneflex