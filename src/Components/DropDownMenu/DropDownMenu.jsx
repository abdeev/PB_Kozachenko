import s from "./DropDownMenu.module.css";

export const DropDownMenu = ({ menuItemName }) => {
  return (
    <ul className={s.menuList}>
      <li className={s.menuItem} onClick={onClick}>
        {menuItemName}
      </li>
    </ul>
  );
};
