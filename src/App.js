import { useEffect, useState } from "react";
import Swiper from "./Components/Swiper/Swiper";
import { PageHeader } from "../src/Components/PageHeader/PageHeader";
import Body from "./Components/Body/Body";
import s from "../src/App.module.css";

export const App = () => {
  const [fullPrice, setFullPrice] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const onChangeQuery = (query) => {
    setSearchQuery(query);
  };

  const fullPriceJSON = async () => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzl-BIJfilgYAhLzhUdQbo8ngxDZ8pU4SIUsvHjiVwUTTkngvfmygg6WC3UGlmVVK_7eg/exec"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFullPrice(data.articules);
          setCategories(
            data.articules
              .map((obj) => obj.Category.toLowerCase())
              .filter(
                (uniqueCat, index, array) => array.indexOf(uniqueCat) === index
              )
          );
          console.log(categories);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (searchQuery) {
      fullPriceJSON();
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className={s.App}>
      <PageHeader onSubmit={onChangeQuery} />
      <Swiper />
      <Body priceList={fullPrice} query={searchQuery} />
    </div>
  );
};
