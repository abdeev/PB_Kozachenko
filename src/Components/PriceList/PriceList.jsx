import React from "react";
import s from "./PriceList.module.css";

const Pricelist = ({ priceList, query }) => {
  const filteredPrice = priceList.filter(
    (i) =>
      i.GoodName.toLowerCase().includes(query.toLowerCase()) ||
      i.Category.includes(query.toLowerCase())
  );

  if (filteredPrice.length > 0)
    return (
      <div className={s.PriceListWrapper}>
        <ul className={s.PriceUL}>
          <li className={s.PriceItem}>
            <p className={s.ArtNumber}>Арт</p>
            <p className={s.GoodName}>Назва товару</p>
            <p className={s.Amount}>Штук у ящіку</p>
            <p className={s.Price}>Ціна у грн з НДС за шт.</p>
            <button className={s.AddButton}>+</button>
          </li>
          {filteredPrice.map((i) => {
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
              return (
                <li className={s.PriceItem} key={i.UniqueID}>
                  <p className={s.ArtNumber}>{i.Art}</p>
                  <p className={s.GoodName}>{i.GoodName}</p>
                  <p className={s.Amount}>{i.Amount}</p>
                  <p className={s.Price}>{i.Price}</p>
                  <button className={s.AddButton}>+</button>
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
