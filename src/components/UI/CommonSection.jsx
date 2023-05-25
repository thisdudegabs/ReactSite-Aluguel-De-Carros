import React from "react";
import "../../styles/common-section.css";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common_section mb-5">
      <Container className="text-center">
        <h1 className="text-light">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
