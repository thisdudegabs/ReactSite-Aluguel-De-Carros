import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form_group">
          <input type="text" placeholder="Endereço Inicial" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="text" placeholder="Endereço Final" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="date" placeholder="Data da Viagem" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input
            className="journey_time"
            type="time"
            placeholder="Horário Estimado"
            required
          />
        </FormGroup>

        <FormGroup className="select_group">
          <select name="" id="">
            <option value="ac">Ar Condicionado</option>

            <option value="non-ac">Sem Ar Condicionado</option>
          </select>
        </FormGroup>

        <FormGroup className="form_group">
          <button className="btn find_car-btn">Encontrar Carro</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
