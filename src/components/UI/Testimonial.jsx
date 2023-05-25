import React from "react";
import Slider from "react-slick";
import testimonial from "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScrow: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScrow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Ótimo serviço! Aluguei um Tesla Model 3 e fiquei impressionado com o
          desempenho e conforto. Recomendo a todos os amantes de carros de luxo.
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Victor Ferreira</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Tive uma experiência incrível com a empresa de aluguel de carros. O
          BMW X3 que aluguei era impecável e oferecia recursos de alta
          tecnologia.
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Cintia Rocha</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Alugar o Aventador foi uma escolha acertada. O carro tinha um design
          deslumbrante e um motor potente. Fiquei satisfeito com o atendimento e
          a qualidade do veículo.
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Michael Dias</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Aluguei um XC90 para uma viagem em família e fiquei muito satisfeita.
          O carro era espaçoso, confortável e equipado com recursos de segurança
          avançados. Recomendo!
        </p>

        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Victoria Luana</h6>
            <p className="section_description"></p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
