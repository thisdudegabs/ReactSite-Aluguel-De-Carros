import React, { useState } from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import pix from "../../assets/all-images/pix.jpg";
import boleto from "../../assets/all-images/boleto.jpg";

import "../../styles/payment-method.css";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            checked={selectedOption === "pix"}
            onChange={() => handleOptionChange("pix")}
          />{" "}
          PIX
        </label>

        <img src={pix} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            checked={selectedOption === "boleto"}
            onChange={() => handleOptionChange("boleto")}
          />{" "}
          Boleto
        </label>

        <img src={boleto} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            checked={selectedOption === "credito"}
            onChange={() => handleOptionChange("credito")}
          />{" "}
          Crédito
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            checked={selectedOption === "paypal"}
            onChange={() => handleOptionChange("paypal")}
          />{" "}
          Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button>Reserve Agora</button>
      </div>
    </>
  );
};

export default PaymentMethod;
