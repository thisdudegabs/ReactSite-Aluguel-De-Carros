import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

const CarListing = () => {
  const [filtro, setFiltro] = useState("");

  const handleChangeFiltro = (event) => {
    setFiltro(event.target.value);
  };
  const ordenarCarros = (carros, filtro) => {
    if (filtro === "high") {
      return [...carros].sort((a, b) => a.rating - b.rating);
    } else if (filtro === "low") {
      return [...carros].sort((a, b) => b.rating - a.rating);
    } else {
      return carros;
    }
  };

  const carrosOrdenados = ordenarCarros(carData, filtro); // Array de carros ordenados com base no filtro

  return (
    <Helmet title="Cars">
      <CommonSection title="Lista de Carros" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"> Filtre</i>
                </span>

                <select value={filtro} onChange={handleChangeFiltro}>
                  <option> Selecione </option>
                  <option value="low"> Melhor Avaliado </option>
                  <option value="high"> Pior Avaliado</option>
                </select>
              </div>
            </Col>

            {carrosOrdenados.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
