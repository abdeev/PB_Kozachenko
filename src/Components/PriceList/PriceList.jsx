import React from "react";
import s from "./PriceList.module.css";

const Pricelist = ({ priceList }) => {
  console.log(priceList);
  return (
    <div>
      <ul>
        {priceList.map((i) => {
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
                <button>+</button>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Pricelist;
