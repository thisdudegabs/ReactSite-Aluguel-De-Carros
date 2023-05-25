import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ========== parte do hero ============== */}

      <section className="p-0 hero_slider-section">
        <HeroSlider />

        <div className="hero_form">
          <Container>
            <Row className="form_row">
              <Col lg="4" md="4">
                <div className="find_cars-left">
                  <h2>Encontre o carro perfeito conosco!</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* ========== parte do Sobre Nós ============== */}
      <AboutSection />

      {/* ========== parte de Serviços ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">Veja os</h6>
              <h2 className="section_title">Serviços Populares</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* ========== parte de Oferta do Carro ============== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section_subtitle"> Aproveite</h6>
              <h2 className="section_title">As Ofertas!</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* ========== parte de Motorista Recanto ============== */}

      <BecomeDriverSection />

      {/* ========== parte de Testemunhos ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section_subtitle">O que os clientes dizem</h6>
              <h2 className="section_title">Avaliações</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* ========== parte de Blog ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">Veja nosso Blog!</h6>
              <h2 className="section_title">Posts Recentes</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
