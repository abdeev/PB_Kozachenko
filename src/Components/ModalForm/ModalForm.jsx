import { useState } from "react";
import { useRef } from "react";
import { Toast } from "primereact/toast";

import Backdrop from "Components/Backdrop/Backdrop";
import TelegramSendMessage from "api/TelegramSendMessage";
import randomID from "@mrenke/randomid-generator";
import s from "../ModalForm/ModalForm.module.css";

const INITIAL_USER_DATA = {
  userName: "",
  userTel: "",
  userAddress: "",
  userComment: "",
};
const ModalForm = ({ handleBackModalClick, setModalFlag, cart, setCart }) => {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const { userName, userTel, userAddress, userComment } = userData;
  const toastTС = useRef(null);

  const showTopCenter = () => {
    toastTС.current.show({
      severity: "success",
      summary: "Info Message",
      detail: "Ваше замовлення відправлено!",
      life: 3000,
    });
  };

  const resetForm = () => {
    setUserData(INITIAL_USER_DATA);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const userOrder = cart.slice(1);
    let messageToTG = `✅ НОВА ЗАЯВКА З САЙТУ \n
    Дата: ${new Date().toLocaleString()} \n 
    Від: ${userName} \n 
    Адреса: ${userAddress}\n 
    Телефон: ${userTel} \n 
    Коментар: ${userComment} \n 
    Замовлення: \n
    ${userOrder.map((i, ind) => {
      return `${ind + 1} \n 
      арт: ${i.Art} \n
      товар: ${i.GoodName} \n
      кількість у ящику: ${i.Amount} \n
      ціна за одиницю: ${i.Price} \n
      кількість замовлено: ${i.Order} \n \n`;
    })}
    
    Усього замовлено ${userOrder.length} товарів. \n
    На сумму: ${userOrder.reduce(
      (acc, i) => acc + i.Price * i.Order,
      0
    )} грн. \n`;

    TelegramSendMessage(messageToTG);
    resetForm();
    showTopCenter();
    setModalFlag(false);
  };
  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...userData };
    newData[name] = value;
    setUserData(newData);
  };
  return (
    <div className={s.modalAndBackWrap}>
      <Backdrop onClick={handleBackModalClick} />
      <div className={s.modal}>
        <p className={s.orderTitle}>Деталі замовлення</p>
        <ul className={s.ModalUL}>
          {cart.map((i) => {
            return (
              <li className={s.ModalItem} key={randomID()}>
                <p className={s.ArtNumber}>{i.Art}</p>
                <p className={s.GoodName}>{i.GoodName}</p>
                <p className={s.Amount}>{i.Amount}</p>
                <p className={s.Price}>{i.Price}</p>
                <div className={s.quantityBlock}>{i.Order}</div>
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
                onChange={handleInputsChange}
                name="userName"
                placeholder="ФОП Козачка"
                required={true}
              />
            </label>
            <label className={s.inputs}>
              Введіть адресу доставки Вашого замовлення:
              <input
                type="text"
                value={userAddress}
                onChange={handleInputsChange}
                name="userAddress"
                placeholder="м. Дніпро, просп. Перемоги 22а, магазин Ластівка"
                required={true}
              />
            </label>
            <label className={s.inputs}>
              Введіть Ваш номер телефону:
              <input
                type="text"
                value={userTel}
                onChange={handleInputsChange}
                name="userTel"
                placeholder="+380501112233"
                required={true}
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
                onChange={handleInputsChange}
                name="userComment"
                placeholder="Зателефонуйте мені, для узгодження деталей"
              />
            </label>
          </div>

          <button className={s.buttonSubmit} type="submit" onClick={submitForm}>
            Відправити замовлення
          </button>
          <Toast className={s.Toast} ref={toastTС} position="top-center" />
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
