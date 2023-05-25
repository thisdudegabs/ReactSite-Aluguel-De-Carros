import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Sobre",
  },
  {
    path: "#",
    display: "Politicas de Privacidade",
  },

  {
    path: "/cars",
    display: "Lista de Carros",
  },

  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contato",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer_logo">
              <h1>
                <Link to="/home" className="d-flex allign-items-center gap-2">
                  <i class="ri-roadster-fill" style={{ marginTop: "15px" }}></i>
                  <span>
                    Recanto <br /> Veículos
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content">
              Recanto Veículos: sua escolha confiável para aluguel de carros.
              Frota moderna, atendimento excepcional e preços competitivos. Faça
              sua reserva e desfrute da melhor experiência em mobilidade.
              Descubra o conforto na estrada com a Recanto Veículos.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title">Links Rápidos</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Atendimento</h5>
              <p className="office_info">
                <i class="ri-home-2-line icon-spacing"></i>
                Rua dos Buritis, 54 - São Paulo - SP, 04321-000
              </p>

              <p className="office_info">
                <i class="ri-phone-line icon-spacing"></i>
                0800-219-88-77
              </p>

              <p className="office_info">
                <i class="ri-mail-line icon-spacing"></i>
                recanto_veiculos@recanto.com.br
              </p>

              <p className="office_info">
                <i class="ri-time-line icon-spacing"></i>
                Seg - Sab das 9:00 - 19:00
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer_link-title">Newsletter</h5>
              <p className="section_description" style={{ fontSize: "1rem" }}>
                Se Inscreva para mais novidades!
              </p>
              <div className="newsletters">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-mail-send-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer_bottom">
              <div className="d-flex align-items-center justify-content-center gap-1 pt-4">
                <p className="section_description" style={{ fontSize: "1rem" }}>
                  <i class="ri-copyright-line"></i>Copyright {year},
                  Desenvolvido por Gabriel Franco. Todos os direitos reservados
                  de mentirinha.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
