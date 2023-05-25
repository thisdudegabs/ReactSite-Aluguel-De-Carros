import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import OurMembers from "../components/UI/OurMembers";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Sobre Nós" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about_page-content">
                <h2 className="section_title">
                  Estamos Comprometidos Com O Melhor Serviço
                </h2>

                <p className="section_description">
                  Estamos comprometidos com o melhor serviço. Na nossa empresa,
                  o nosso objetivo principal é proporcionar a melhor experiência
                  aos nossos clientes em cada interação. Sabemos que alugar um
                  carro pode ser uma tarefa importante e queremos torná-la fácil
                  e agradável para você. Desde o momento em que você entra em
                  contato conosco até a devolução do veículo, nossa equipe
                  dedicada está pronta para ajudar e garantir que suas
                  necessidades sejam atendidas.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section_subtitle">Precisa de Ajuda?</h6>
                    <h4>0800-219-88-77</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">Especialistas</h6>
              <h2 className="section_title">Nosso Time</h2>
            </Col>

            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
