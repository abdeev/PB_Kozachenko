import s from "./DropDownMenu.module.css";

export const DropDownMenu = ({ menuItems, dropdownFlag, setDropdownFlag }) => {
  const onCategoryClick = (e) => {
    console.log(e.target.innerHTML);
    setDropdownFlag(!dropdownFlag);
  };
  return (
    <ul className={s.menuList}>
      {menuItems.map((menuItem) => {
        if (menuItem !== "категорія" && menuItem !== "") {
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
