import React from "react";
import s from "./PriceList.module.css";

const Pricelist = ({ priceList }) => {
  return (
    <div>
      <ul>
        {priceList.map((i) => {
          if (i.Art !== "") {
            return (
              <li className={s.PriceItem} key={i.Art + i.Amount}>
                <p className={s.ArtNumber}>{i.Art}</p>
                <p className={s.SeqNum}>{i.SeqNum}</p>
                <p className={s.GoodName}>{i.GoodName}</p>
                <p className={s.Amount}>{i.Amount}</p>
                <p className={s.Price}>{i.Price}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Pricelist;
