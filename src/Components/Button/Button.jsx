import PropTypes from "prop-types";
import css from "./Button.module.css";

export const Button = ({ onClick, children }) => (
  <button className={css.Button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};
