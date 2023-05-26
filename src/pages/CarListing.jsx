import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Lista de Carros" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"> Filtre</i>
                </span>

                <select>
                  <option> Selecione </option>
                  <option value="low"> Melhor Avaliado </option>
                  <option value="high"> Pior Avaliado</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
