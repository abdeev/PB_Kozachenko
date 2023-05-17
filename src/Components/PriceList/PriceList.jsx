import React from "react";
import { InputNumber } from "primereact/inputnumber";
import s from "./PriceList.module.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

const Pricelist = ({ priceList, query, changeQuantity }) => {
  const filterPrice = (q) => {
    if (q === "Повний прайс") {
      return priceList;
    }
    return priceList.filter(
      (i) =>
        i.GoodName.toLowerCase().includes(query.toLowerCase()) ||
        i.Category.includes(query.toLowerCase())
    );
  };
  if (filterPrice(query).length > 0)
    return (
      <div className={s.PriceListWrapper}>
        <ul className={s.PriceUL}>
          <li className={s.PriceItem}>
            <p className={s.ArtNumber}>Арт</p>
            <p className={s.GoodName}>Назва товару</p>
            <p className={s.Amount}>Штук у ящіку</p>
            <p className={s.Price}>Ціна у грн з НДС за шт.</p>
            <p className={s.Price}>К-сть замовл</p>
          </li>
          {filterPrice(query).map((i) => {
            if (i.Art === "Артикул" && i.GoodName === "Наименование") {
              return null;
            }
            if (i.Art === "" && typeof i.SeqNum === "string") {
              return (
                <li className={s.PriceItem} key={i.UniqueID}>
                  {i.SeqNum}
                </li>
              );
            }
            if (i.Art !== "" && i.GoodName !== "") {
              let tempObject = {
                Art: i.Art,
                GoodName: i.GoodName,
                Amount: i.Amount,
                Price: i.Price,
                Order: 0,
              };

              return (
                <li className={s.PriceItem} key={i.UniqueID}>
                  <p className={s.ArtNumber}>{i.Art}</p>
                  <p className={s.GoodName}>{i.GoodName}</p>
                  <p className={s.Amount}>{i.Amount}</p>
                  <p className={s.Price}>{i.Price}</p>

                  <InputNumber
                    inputId={i.Art}
                    value={tempObject.Order}
                    onValueChange={(e) => changeQuantity(e, i, tempObject)}
                    mode="decimal"
                    showButtons
                    buttonLayout="vertical"
                    style={{ width: "50px" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    min={0}
                    max={1000}
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  else
    return (
      <li className={s.PriceItem}>
        За Вашим запитом немає результатів, спробуйте іншу комбінацію для пошуку
      </li>
    );
};

export default Pricelist;
