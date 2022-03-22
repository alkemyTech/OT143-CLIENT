import React from "react";
import Mercadopago from "./../Mercadopago/Mercadopago";

const texto = "Ayudanos con la causa";

const Donacion = ({ text }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-5 pt-3 mb-3 pb-4">
          <h1 className="d-flex justify-content-center text-center">
            {text || texto}
          </h1>
        </div>
        <Mercadopago />
      </div>
    </div>
  );
};

export default Donacion;
