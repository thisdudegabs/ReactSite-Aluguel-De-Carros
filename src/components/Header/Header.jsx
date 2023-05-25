import React, { useRef } from "react";
import { Container, Row, Col, Nav } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Inicio",
  },
  {
    path: "/about",
    display: "Sobre",
  },
  {
    path: "/cars",
    display: "Carros",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

  return (
    <header className="header">
      {/* ======== header top ========= */}
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Precisa de Suporte? </span>
                <span className="header_top_help">
                  <i class="ri-customer-service-fill"></i> 0800-219-88-77
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-login-box-line"></i> Login
                </Link>

                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-user-add-fill"></i> Registrar
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ================ header meio ============= */}
      <div className="header_middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex allign-items-center gap-2">
                    <i
                      class="ri-roadster-fill"
                      style={{ marginTop: "15px" }}
                    ></i>
                    <span>
                      Recanto <br /> Veículos
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex allign-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Brasil</h4>
                  <h6>São Paulo, SP</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex allign-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Segunda a Sábado</h4>
                  <h6>09:00 - 19:00</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end"
            >
              <buttom className="header_btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Solicite uma ligação!
                </Link>
              </buttom>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ================ nevegação principal ================== */}

      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i class="ri-menu-fill" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav_right">
              <div className="search_box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
