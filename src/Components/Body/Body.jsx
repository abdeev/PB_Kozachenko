import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { NaviBar } from "../NaviBar/NaviBar";
import Pricelist from "../PriceList/PriceList";
import { MagnifyingGlass } from "react-loader-spinner";

import s from "./Body.module.css";

const Body = ({ priceList, query, isLoading }) => {
  return (
    <div className={s.Body}>
      <LeftSideBar />
      <div className={s.PriceNaviWrapper}>
        <NaviBar />
        {isLoading && (
          <MagnifyingGlass
            visible={true}
            height="120"
            width="120"
            ariaLabel="MagnifyingGlass-loading"
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#8B4513"
          />
        )}
        <Pricelist priceList={priceList} query={query} />
      </div>
    </div>
  );
};

export default Body;
