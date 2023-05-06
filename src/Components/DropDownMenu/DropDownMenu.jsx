import s from "./DropDownMenu.module.css";

export const DropDownMenu = ({
  menuItems,
  dropdownFlag,
  setDropdownFlag,
  setCurrentCategory,
}) => {
  const onCategoryClick = (e) => {
    if (e.target.innerHTML === "Повний прайс") {
      setCurrentCategory("Повний прайс");
    }
    setCurrentCategory(e.target.innerHTML);
    setDropdownFlag(!dropdownFlag);
  };
  return (
    <ul className={s.menuList}>
      <li className={s.menuItem} onClick={onCategoryClick} key={"Повний прайс"}>
        <button className={s.btnCategory}>Повний прайс</button>
      </li>
      {menuItems.map((menuItem) => {
        if (
          menuItem !== "категорія" &&
          menuItem !== "заголовок" &&
          menuItem !== ""
        ) {
          return (
            <li className={s.menuItem} onClick={onCategoryClick} key={menuItem}>
              <button className={s.btnCategory}>{menuItem}</button>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};
