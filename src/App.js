import Swiper from "./Components/Swiper/Swiper";
import { PageHeader } from "../src/Components/PageHeader/PageHeader";
import css from "./App.module.css";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import { useState } from "react";
import Pricelist from "./Components/PriceList/PriceList";

export const App = () => {
  const [fullPrice, setFullPrice] = useState([]);

  const fullPriceJSON = async () => {
    try {
      await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=TQbJh4vwbkqKkJfiwhEi-yrrDzFwN7RsFG00h7_8xG7BIAKpZ2J0IjLSgUqgVEBhXqL4rfcHPrg9UPF90_pg60WeiYEypng4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBNG5sCUXVuy_Puip0_mFdjooYQ2wie2C8TofeNh-EpojfqhOLstlzk8z6gUUFlLcSQ4sF4SO2Uljop2yOes9N2Q3MvPNF43q9z9Jw9Md8uu&lib=MvXlhQJIPkCfPBJ9yT1KRs12YtLsRiWYc"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFullPrice(data.articules);
        });
    } catch (error) {
      console.log(error);
    }
  };
  fullPriceJSON();

  return (
    <div className={css.App}>
      <PageHeader />
      <>
        <Swiper />
        <>
          <LeftSideBar />
          <Pricelist priceList={fullPrice} />
        </>
      </>
    </div>
  );
};
