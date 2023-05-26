import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import "../styles/car-details.css";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    { singleCarItem }
  );

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car_info">
                <h2 className="section_title">{singleCarItem.carName}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent_price fw-bold fs-4">
                    R${singleCarItem.price},00 /Dia
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }} className="star_rating">
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                    </span>
                    <div className="rating_number">
                      ({singleCarItem.rating} Avaliações)
                    </div>
                  </span>
                </div>

                <p className="section_description">
                  {singleCarItem.description}
                </p>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "5.5rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i class="ri-car-fill" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className="d-flex align-items-center gap-1 section_description ">
                    <i
                      class="ri-settings-5-fill"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className="d-flex align-items-center gap-1 ml-4 section_description">
                    <i
                      class="ri-speed-up-fill"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i class="ri-map-pin-fill" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      class="ri-wheelchair-fill"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      class="ri-building-2-fill"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Informações de Aluguel</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="">
              <div className="payment_info mt-5">
                <h5 className="mb-4 fw-bold">Informações de Pagamento</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
