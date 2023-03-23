import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Pricelist from "../PriceList/PriceList";
import s from "./Body.module.css";

const Body = ({ priceList }) => {
  return (
    <div className={s.Body}>
      <LeftSideBar />
      <Pricelist priceList={priceList} />
    </div>
  );
};

export default Body;
