import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Beneflex",
    url: "#",
  },
  {
    display: "Ozias",
    url: "#",
  },

  {
    display: "Naturalización",
    url: "#",
  },

  {
    display: "Curso de Inglés",
    url: "#",
  },
  {
    display: "Finanzas",
    url: "#",
  },
  {
    display: "Referencias",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Política de Privacidad ",
    url: "#",
  },
  {
    display: "Membresia",
    url: "#",
  },

  {
    display: "Guia al cliente",
    url: "#",
  },

  {
    display: "Términos & Condiciones" ,
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> DTB INMIGRANTE.
            </h2>

            <div className="follows">
              <p className="mb-0">REDES SOCIALES</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Departamento de Bienestar del Cliente </h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Información</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Ponerse en contacto</h6>

            <p>12145 Grand Ave N El Mirage, AZ 85335</p>
            <p> 623 230-3656  </p>
            <p>dptobienestar@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;