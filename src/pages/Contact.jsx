import React from "react";

import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

import { Link } from "react-router-dom";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contato">
      <CommonSection title="Contato" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7" className="contact_us">
              <h6 className="fw-bold mb-3">Fale Conosco :)</h6>

              <Form>
                <FormGroup className="contact_form">
                  <Input placeholder="Seu Nome" type="text" />
                </FormGroup>

                <FormGroup className="contact_form">
                  <Input placeholder="Seu Email" type="text" />
                </FormGroup>

                <FormGroup className="contact_form">
                  <Input placeholder="Seu Número" type="number" />
                </FormGroup>

                <FormGroup className="contact_form">
                  <textarea
                    rows="5"
                    placeholder="Sua Mensagem"
                    className="w-100 py-2 px-3"
                  ></textarea>
                </FormGroup>

                <button className="btn contact_btn " type="submit">
                  Enviar
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact_info">
                <h6 className="fw-bold">Informações de Contato</h6>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Endereço:</h6>
                  <p className="section_description mb-0">
                    Rua dos Buritis, 54 - São Paulo - SP, 04321-000
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Telefone:</h6>
                  <p className="section_description mb-0">0800-219-88-77</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section_description mb-0">
                    recanto_veiculos@recanto.com.br
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Nossas Redes Sociais</h6>
                <div className="d-flex align-items-center gap-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social_link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
