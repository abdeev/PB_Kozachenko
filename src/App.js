import { useEffect, useState } from "react";
import Swiper from "./Components/Swiper/Swiper";
import { PageHeader } from "../src/Components/PageHeader/PageHeader";
import { PageFooter } from "../src/Components/PageFooter/PageFooter";
import { DropDownMenu } from "Components/DropDownMenu/DropDownMenu";
import { ReactComponent as IconMenu } from "../src/static/icons/drop_down_icon.svg";
import Backdrop from "Components/Backdrop/Backdrop";
import LeftSideBar from "Components/LeftSideBar/LeftSideBar";
import { MagnifyingGlass } from "react-loader-spinner";
import Pricelist from "Components/PriceList/PriceList";
import ModalForm from "Components/ModalForm/ModalForm";
import s from "../src/App.module.css";

export const App = () => {
  const [fullPrice, setFullPrice] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [cart, setCart] = useState([
    {
      Art: "Арт",
      GoodName: "Назва товару",
      Amount: "Штук у ящику",
      Price: "Ціна за шт.",
      Order: "Замовлено",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const [dropdownFlag, setDropdownFlag] = useState(false);
  const [modalFlag, setModalFlag] = useState(false);

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
  useEffect(() => {
    fullPriceJSON();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (currentCategory) {
      setSearchQuery(currentCategory);
    }

    return;
  }, [currentCategory]);
  const handleDropDownMenu = (e) => {
    e.preventDefault();
    setDropdownFlag(!dropdownFlag);
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setDropdownFlag(!dropdownFlag);
    }
  };
  const handleBackModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalFlag(false);
    }
  };
  return (
    <div className={s.App}>
      <PageHeader onSubmit={onChangeQuery} setModalFlag={setModalFlag} />
      <div className={s.dropDownWrap}>
        {dropdownFlag ? (
          <>
            <DropDownMenu
              onClick={handleDropDownMenu}
              menuItems={categories}
              dropdownFlag={dropdownFlag}
              setDropdownFlag={setDropdownFlag}
              setCurrentCategory={setCurrentCategory}
            />
            <Backdrop onClick={handleBackdropClick} />
          </>
        ) : (
          <div className={s.IconMenuWrap}>
            <p className={s.IconTitle}>Каталог</p>
            <IconMenu className={s.IconMenu} onClick={handleDropDownMenu} />
          </div>
        )}
      </div>
      <Swiper className={s.SwiperWrap} />
      <div className={s.Body}>
        <LeftSideBar setModalFlag={setModalFlag} />
        <div className={s.PriceNaviWrapper}>
          {isLoading && (
            <MagnifyingGlass
              visible={true}
              height="120"
              width="120"
              ariaLabel="MagnifyingGlass-loading"
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="rgb(192, 239, 255, 0.3)"
              color="#8B4513"
            />
          )}
          <Pricelist
            priceList={fullPrice}
            query={searchQuery}
            setCart={setCart}
            cart={cart}
          />
        </div>
      </div>
      <PageFooter />
      {modalFlag && (
        <ModalForm
          handleBackModalClick={handleBackModalClick}
          setModalFlag={setModalFlag}
          cart={cart}
          setCart={setCart}
        />
      )}
    </div>
  );
};
