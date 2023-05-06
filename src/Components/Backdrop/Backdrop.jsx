import React, { useEffect } from "react";
import PropTypes from "prop-types";

import s from "../Backdrop/Backdrop.module.css";

const Backdrop = ({ children, onClick }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // 27 is the key code for ESC key
      onClick(onClick);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

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
