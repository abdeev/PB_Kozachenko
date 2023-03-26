import React from "react";
import s from "./PriceList.module.css";

const Pricelist = ({ priceList, query }) => {
  const filteredPrice = priceList.filter((i) =>
    i.GoodName.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredPrice.length > 0)
    return (
      <div className={s.PriceListWrapper}>
        <ul className={s.PriceUL}>
          {filteredPrice.map((i) => {
            if (i.Art === "" && typeof i.SeqNum === "string") {
              return (
                <li className={s.PriceItem} key={i.UniqueID}>
                  {i.SeqNum}
                </li>
              );
            }
            if (i.Art !== "" && i.GoodName !== "") {
              return (
                <li className={s.PriceItem} key={i.Art + i.Amount}>
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
