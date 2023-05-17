import { useState, useEffect } from "react";
import Backdrop from "Components/Backdrop/Backdrop";
import TelegramSendMessage from "api/TelegramSendMessage";
import randomID from "@mrenke/randomid-generator";
import s from "../ModalForm/ModalForm.module.css";
import "primeicons/primeicons.css";
import { InputNumber } from "primereact/inputnumber";

const INITIAL_USER_DATA = {
  userName: "",
  userTel: "",
  userAddress: "",
  userComment: "",
};

const ModalForm = ({
  handleBackModalClick,
  setModalFlag,
  cart,
  setCart,
  changeQuantity,
}) => {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const { userName, userTel, userAddress, userComment } = userData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let totalOrderedPrice = cart.reduce((acc, i) => {
    if (isNaN(i.Price * i.Order)) return acc;
    return acc + i.Price * i.Order;
  }, 0);
  const resetForm = () => {
    setUserData(INITIAL_USER_DATA);
  };
  const clearCart = () => {
    setCart([
      {
        Art: "Арт",
        GoodName: "Назва товару",
        Amount: "Штук у ящику",
        Price: "Ціна за шт.",
        Order: "Замовлено",
      },
    ]);
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
      return `${ind + 1}  \n
      арт: ${i.Art} \n
      товар: ${i.GoodName} \n
      кількість у ящику: ${i.Amount} \n
      ціна за одиницю: ${i.Price} \n
      кількість замовлено: ${i.Order}  \n \n`;
    })}
    
    Усього замовлено ${userOrder.length} товарів. \n
    На сумму: ${userOrder
      .reduce((acc, i) => acc + i.Price * i.Order, 0)
      .toFixed(2)} грн. \n`;

    TelegramSendMessage(messageToTG);
    resetForm();
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
        <i
          className={`pi pi-times-circle ${s.closeButton}`}
          onClick={handleBackModalClick}
        ></i>

        <p className={s.orderTitle}>Деталі замовлення</p>
        <ul className={s.ModalUL}>
          <li className={s.ModalItem} key={randomID()}>
            <p className={s.ArtNumber}>Арт</p>
            <p className={s.GoodName}>Назва товару</p>
            <p className={s.Amount}>Штук у ящику</p>
            <p className={s.Price}>Ціна за шт</p>
            <div className={s.quantityBlock}>Зам овл ено</div>
            <div className={s.totalPrice}>Сума замовлення</div>
          </li>
          {cart.map((i) => {
            if (isNaN(i.Order * i.Price)) return null;
            let tempObject = {
              Art: i.Art,
              GoodName: i.GoodName,
              Amount: i.Amount,
              Price: i.Price,
              Order: i.Order,
            };

            return (
              <li className={s.ModalItem} key={randomID()}>
                <p className={s.ArtNumber}>{i.Art}</p>
                <p className={s.GoodName}>{i.GoodName}</p>
                <p className={s.Amount}>{i.Amount}</p>
                <p className={s.Price}>{i.Price}</p>
                <InputNumber
                  inputId={randomID()}
                  value={tempObject.Order}
                  onValueChange={(e) => changeQuantity(e, i, tempObject)}
                  mode="decimal"
                  showButtons
                  buttonLayout="vertical"
                  style={{ width: "34px" }}
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  min={0}
                  max={1000}
                />
                <div className={s.totalPrice}>
                  {(i.Price * i.Order).toFixed(2)}
                </div>
              </li>
            );
          })}
          <p>
            Усього замовлено{"  "}
            <b className={s.totalOrderedNumber}>
              {cart.length - 1}
            </b> позицій. <br />
            На суму:{" "}
            <b className={s.totalOrderedNumber}>
              {totalOrderedPrice.toFixed(2)}
            </b>{" "}
            грн.
          </p>
        </ul>
        <form action="submit" className={s.formWrap}>
          <div className={s.inputsWrap}>
            <label className={s.inputs}>
              Ваше ім'я або назву підприємства:
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
          <button className={s.buttonClear} type="reset" onClick={clearCart}>
            Скинути замовлення
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
