import s from "../ModalForm/ModalForm.module.css";
import Backdrop from "Components/Backdrop/Backdrop";
import { useState } from "react";
import TelegramSendMessage from "api/TelegramSendMessage";

const ModalForm = ({ handleBackModalClick, setModalFlag, cart, setCart }) => {
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userComment, setUserComment] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    let messageToTG = `✅ НОВА ЗАЯВКА З САЙТУ \n Від: ${userName} \n Телефон: ${userTel} \n Коментар: ${userComment}`;

    TelegramSendMessage(messageToTG);
    setUserName("");
    setUserTel("");
    setUserComment("");
    setModalFlag(false);
  };
  return (
    <div className={s.modalAndBackWrap}>
      <Backdrop onClick={handleBackModalClick} />
      <div className={s.modal}>
        <p className={s.orderTitle}>Деталі замовлення</p>
        <ul className={s.ModalUL}>
          {cart.map((i) => {
            return (
              <li className={s.ModalItem} key={i.Art}>
                <p className={s.ArtNumber}>{i.Art}</p>
                <p className={s.GoodName}>{i.GoodName}</p>
                <p className={s.Amount}>{i.Amount}</p>
                <p className={s.Price}>{i.Price}</p>
                <p className={s.Order}>{i.Order}</p>
                <button className={s.buttonMinus}>-</button>
              </li>
            );
          })}
        </ul>
        <form action="submit" className={s.formWrap}>
          <div className={s.inputsWrap}>
            <label className={s.inputs}>
              Ваше ім'я або назва підприємства:
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="userName"
                placeholder="ФОП Козачка"
              />
            </label>
            <label className={s.inputs}>
              Введіть Ваш номер телефону:
              <input
                type="text"
                value={userTel}
                onChange={(e) => setUserTel(e.target.value)}
                name="userTel"
                placeholder="+380501112233"
              />
            </label>
            <label className={s.commentWrap}>
              Додайте коментар:
              <textarea
                className={s.commentInput}
                type="text"
                rows="8"
                cols="33"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                name="userComment"
                placeholder="Зателефонуйте мені, для узгодження деталей"
              />
            </label>
          </div>

          <button className={s.buttonSubmit} type="submit" onClick={submitForm}>
            Відправити замовлення
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
