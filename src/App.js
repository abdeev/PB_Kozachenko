import { useEffect, useState } from "react";
import Swiper from "./Components/Swiper/Swiper";
import { PageHeader } from "../src/Components/PageHeader/PageHeader";
import Body from "./Components/Body/Body";
import s from "../src/App.module.css";

export const App = () => {
  const [fullPrice, setFullPrice] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  const onChangeQuery = (query) => {
    setSearchQuery(query);
  };
  const filteredCategories = (arr) => {
    const categoriesArr = arr
      .map((obj) => obj.Category.toLowerCase())
      .filter((uniqueCat, index, array) => array.indexOf(uniqueCat) === index);
    return categoriesArr;
  };
  const fullPriceJSON = async () => {
    setIsLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzl-BIJfilgYAhLzhUdQbo8ngxDZ8pU4SIUsvHjiVwUTTkngvfmygg6WC3UGlmVVK_7eg/exec"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFullPrice(data.articules);
          setCategories(filteredCategories(data.articules));
          console.log(categories);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
      <PageHeader onSubmit={onChangeQuery} categories={categories} />
      <Swiper />
      <Body priceList={fullPrice} query={searchQuery} isLoading={isLoading} />
    </div>
  );
};
