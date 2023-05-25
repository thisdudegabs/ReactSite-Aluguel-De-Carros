import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking_form d-inline-block ms-4 mb-4">
        <input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Sobrenome" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-4 mb-4">
        <input type="text" placeholder="Endereço Partida" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Endereço Destino" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-4 mb-4">
        <select name="" id="">
          <option value="1 pessoa">1 Pessoa</option>
          <option value="2 pessoas">2 Pessoas</option>
          <option value="3 pessoas">3 Pessoas</option>
          <option value="4 pessoas">4 Pessoas</option>
          <option value="5+ pessoas">5+ Pessoas</option>
        </select>
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 mala">1 Mala</option>
          <option value="2 malas">2 Malas</option>
          <option value="3 malas">3 Malas</option>
          <option value="4 malas">4 Malas</option>
          <option value="5+ malas">5+ Malas</option>
        </select>
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-4 mb-4">
        <input type="date" placeholder="Data de Partida" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Horário de Partida"
          className="time_picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Escreva"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
