import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import CarModal from "../car-modal/car-modal.component";

import { ReactComponent as Logo } from "../../assets/larusso.svg";

import "./header.styles.scss";

const Header = ({ hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    {hidden ? null : <CarModal />}
  </div>
  
);

const mapStateToProps = ({ car: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(Header);
