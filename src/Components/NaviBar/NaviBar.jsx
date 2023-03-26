import { Button } from "../Button/Button";
import s from "../NaviBar/NaviBar.module.css";

export const NaviBar = () => {
  const handleSortBtnClick = (e) => {
    console.log(`Кнопку ${e.target.innerHTML} натиснуто!`);
  };
  return (
    <div className={s.NaviBarWrapper}>
      <Button onClick={handleSortBtnClick}>Чай</Button>
      <Button onClick={handleSortBtnClick}>Кава</Button>
      <Button onClick={handleSortBtnClick}>Крупи</Button>
      <Button onClick={handleSortBtnClick}>Консерви</Button>
      <Button onClick={handleSortBtnClick}>Какао</Button>
      <Button onClick={handleSortBtnClick}>Повний прайс</Button>
    </div>
  );
};
