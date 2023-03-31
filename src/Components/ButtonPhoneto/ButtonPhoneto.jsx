import React from "react";
import s from "../ButtonPhoneto/ButtonPhoneto.module.css";

const ButtonPhoneto = ({ tel, label }) => {
  return <button className={s.ButtonPhoneto}>Подзвонити</button>;
};

export default ButtonPhoneto;
