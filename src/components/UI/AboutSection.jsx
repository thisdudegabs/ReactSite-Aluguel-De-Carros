import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about_section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_section-content">
              <h4 className="section_subtitle">Sobre Nós</h4>
              <h2 className="section_title">Bem-Vindo ao Recanto Veículos </h2>
              <p className="section_description">
                Fundada em 1993, a Recanto Veículos é uma empresa líder no
                mercado de aluguel de carros. Com mais de 10.000 carros alugados
                desde nossa fundação, somos reconhecidos pela qualidade e
                confiabilidade dos nossos serviços. Contamos com uma equipe de
                50 funcionários dedicados, prontos para oferecer um atendimento
                excepcional e garantir a satisfação dos nossos clientes. Na
                Recanto Veículos, nossa missão é proporcionar uma experiência
                única em mobilidade, tornando cada viagem uma jornada memorável.
              </p>

              <div className="about_section-item d-flex align-items-center">
                <div className="about_section-pair">
                  <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> 30 anos de
                    mercado
                  </p>
                </div>

                <div className="about_section-pair">
                  <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> As melhores
                    marcas
                  </p>
                </div>
              </div>

              <div className="about_section-item d-flex align-items-center">
                <div className="about_section-pair">
                  <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Suporte Dedicado
                  </p>
                </div>

                <div className="about_section-pair">
                  <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> + 10.000 carros
                    alugados!
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
