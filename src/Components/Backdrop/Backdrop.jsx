import React from "react";
import PropTypes from "prop-types";

import s from "../Backdrop/Backdrop.module.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <div className={s.backdrop} onClick={onClick}>
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node,
  onBackClick: PropTypes.func,
};

export default Backdrop;
