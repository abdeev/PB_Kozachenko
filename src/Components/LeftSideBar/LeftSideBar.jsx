import React from "react";
import s from "../LeftSideBar/LeftSideBar.module.css";

const LeftSideBar = () => {
  return (
    <div className={s.Sidebar}>
      <button className={s.SidebarButton}>Відправити заявку</button>
      <button className={s.SidebarButton}>Зв'язатися з менеджером</button>
      <button className={s.SidebarButton}>Самовивіз</button>
      <button className={s.SidebarButton}>Стати дистриб'ютером</button>
      <button className={s.SidebarButton}>Залишити відгук</button>
      <button className={s.SidebarButton}>Де забрати</button>
    </div>
  );
};

export default LeftSideBar;
