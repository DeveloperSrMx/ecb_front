import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./car-modal.styles.scss";

const CarModal = ({ carItems }) => (
  <div className="car-modal">
    <div className="car-items"></div>
    <CustomButton>Actualizar</CustomButton>
  </div>
);

const mapStatetoProps = ({ car: { carItems } }) => ({
  carItems,
});

export default connect(mapStatetoProps)(CarModal);
