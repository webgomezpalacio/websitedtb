import React from "react";
import { Container, Row, Col } from "reactstrap";

import Img01 from '../../assets/images/beneflex.jpg';
import Img02 from '../../assets/images/ozias.jpg';
import Img03 from '../../assets/images/naturalizacion.jpg';
import Img04 from '../../assets/images/ingles.jpg';
import Img05 from '../../assets/images/finanzas.jpg';
import Img06 from '../../assets/images/referencias.jpg';

import BienestarCard from "./BienestarCard";

import './bienestar.css'

const coursesData = [
    {
      id: "01",
      title: "Beneflex",
      imgUrl: Img01,
    },
    {
      id: "02",
      title: "Ozias",
      imgUrl: Img02,    
    },
  
    {
      id: "03",
      title: "Curso de Naturalización",
      imgUrl: Img03,
    },
  
    {
      id: "04",
      title: "Curso de Inglés",
      imgUrl: Img04,
    },
    {
        id: "05",
        title: "Finanzas",
        imgUrl: Img05,
      },
    
      {
        id: "06",
        title: "Referencias",
        imgUrl: Img06,
      },
  ];
  
  const Bienestar = () => {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="course__top d-flex justify-content-between align-items-center">
                <div className="course__top__left">
                  <h2>Tu mejor inversion eres tu mismo, no lo pienses más. <br />Invierte en tu futuro.</h2>
                  <h3>“mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.“</h3><br />
                  <p>Para poder contar con un balance positivo y tu estado financiero con nosotros este sano, es importante estar al tanto  y al pendiente de las fechas correspondientes a tus pagos. Sabemos la situacion actualmente es cambiante solo te pedimos que nos pudieras mantener al tanto si requirieras de asesoria o atencion mas especifica como lo es el poder realizar un convenio, promesas de pago o algun otro servicio adicional. Recuerda que lo mas importante para nosotros siempre seras tu. Te apoyaremos en la medida dentro de lo posible. Ten en cuenta que hacer un esfuerzo extra para estar al corriente en tus pagos y dar seguimiento, ayuda a que tu proceso continue sin ningun contratiempo.  

                  </p>
                </div>
              </div>
            </Col>
            {coursesData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <BienestarCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Bienestar;