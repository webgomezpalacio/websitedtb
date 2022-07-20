import React from 'react';
import { Container, Row, Col } from "reactstrap";
import './form.css';

const Forms = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="choose__content">
            <h2>Te preparamos para triunfar y para alcanzar el sueño americano</h2>
            <p>“Así que ya no sois extranjeros ni advenedizos, sino conciudadanos de los santos y miembros de la familia de Dios”.
                Te acompañamos en tu nuevo camino hacia una nueva etapa en tu vida donde tendras mas seguridad, mas beneficios, mas oportunidades y una mejor calidad de vida. Tendras la habilidad de viajar sin limitaciones de tiempo. Se te abriran nuevas oportunidades para peticionar a tu familia y podras votar y ser parte de la sociedad. Te guiaremos para que puedas tener derechos dentro del territorio americano. Contamos con un curso que te preparara adecuadamente para la entrevista que cambiara tu vida. El curso es de 4 clases el costo es de $100.00 dolares. Durante este curso intensivo  te prepararemos y repasaremos todas las preguntas que encontrarás en el examen y te aconsejaremos como combatir los nervios en la entrevista. Conoceras la estructura de la forma N-400. Si no te sientes cómodo en presentarte a tu entrevista solo, la abogada puede acompañarte por un costo extra, para que puedas sentirte mas seguro. 

            </p>
          </div>
        </Col>
        <Col lg="6" md="6">
          <div className="choose__content">
            <form className='form'>
              <h2 className='form__title'>Formulario de contacto DTB</h2>
              <p className='form__paragraph'>No tengas miedo de aprender algo nuevo, ve más allá de tu lenguaje y podrás abrir los ojos a un nuevo horizonte </p>
              <div className="form__container">
                <div className="form__group">
                  <input type="text" id='name' className='form__input' placeholder='' />
                  <label form='name' className='form__label'> Nombre: </label>
                  <span className='form__line'></span>
                </div>
                <div className="form__group">
                  <input type="text" id='telefono' className='form__input' placeholder='' />
                  <label form='telefono' className='form__label'> Teléfono: </label>
                  <span className='form__line'></span>
                </div>
                <div className="form__group">
                  <input type="text" id='mensaje' className='form__input' placeholder='' />
                  <label form='mensaje' className='form__label'> Mensaje: </label>
                  <span className='form__line'></span>
                </div>
                <input type='submit' className='form__submit' value='Enviar' />


              </div>
            </form>
         
          </div>
        </Col>
        </Row>
        </Container>
        </section>
  )
}

export default Forms