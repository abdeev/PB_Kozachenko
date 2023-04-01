import React from "react";
import s from "../ContactButton/ContactButton.module.css";

const ContactButton = ({ linkTo, label }) => {
  return (
    <a
      className={s.ButtonPhoneto}
      href={linkTo}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
};

export default ContactButton;
