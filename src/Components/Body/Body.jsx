import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Pricelist from "../PriceList/PriceList";
import s from "./Body.module.css";

const Body = ({ priceList, query }) => {
  return (
    <div className={s.Body}>
      <LeftSideBar />
      <Pricelist priceList={priceList} query={query} />
    </div>
  );
};

export default Body;
