import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { NaviBar } from "../NaviBar/NaviBar";
import Pricelist from "../PriceList/PriceList";
import s from "./Body.module.css";

const Body = ({ priceList, query }) => {
  return (
    <div className={s.Body}>
      <LeftSideBar />
      <div className={s.PriceNaviWrapper}>
        <NaviBar />
        <Pricelist priceList={priceList} query={query} />
      </div>
    </div>
  );
};

export default Body;
