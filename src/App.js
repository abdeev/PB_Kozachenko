import { useEffect, useState } from "react";
import Swiper from "./Components/Swiper/Swiper";
import { PageHeader } from "../src/Components/PageHeader/PageHeader";
import Body from "./Components/Body/Body";
import s from "../src/App.module.css";

export const App = () => {
  const [fullPrice, setFullPrice] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeQuery = (query) => {
    setSearchQuery(query);
  };

  const fullPriceJSON = async () => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyibnrDGOYXvSHOPhX-DIWuTTgLYASrPkNRWu1YIbjE5pK7LZ__UNy3kGN1r4MfymALMQ/exec"
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
  useEffect(() => {
    if (searchQuery) {
      fullPriceJSON();
    }
  }, [searchQuery]);

  return (
    <div className={s.App}>
      <PageHeader onSubmit={onChangeQuery} />
      <Swiper />
      <Body priceList={fullPrice} query={searchQuery} />
    </div>
  );
};
