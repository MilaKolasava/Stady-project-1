import React from "react";
import "./FuelCost.css";

function FuelCost() {
  return (
    <div className="fuelcost-wrapper">
      <div className="fuelcost-information">
        <h2 className="fuelcost-header">Fuel Cost</h2>
        <div className="fuel-block gas-block">
          <div className="gas-name">Gas</div>
          <div className="gas-cena">
            <div className="gas-cena-locale">zl</div>
            <div className="gas-cena-euro">euro</div>
          </div>
        </div>

        <div className="fuel-block diesel-block">
          <div className="diesel-name">Diesel</div>
          <div className="diesel-cena">
            <div className="diesel-cena-locale">zl</div>
            <div className="diesel-cena-euro">euro</div>
          </div>
        </div>

        <div className="fuel-block petrol-block">
          <div className="petrol-name">Petrol</div>
          <div className="petrol-cena">
            <div className="petrol-cena-locale">zl</div>
            <div className="petrol-cena-euro">euro</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuelCost;
