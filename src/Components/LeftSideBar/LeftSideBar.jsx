import React from "react";
import s from "../LeftSideBar/LeftSideBar.module.css";

const LeftSideBar = ({ setModalFlag }) => {
  return (
    <div className={s.Sidebar}>
      <button className={s.SidebarButton} onClick={() => setModalFlag(true)}>
        Відправити заявку
      </button>
      <button className={s.SidebarButton}>Зв'язатися з менеджером</button>
      <button className={s.SidebarButton}>Самовивіз</button>
      <button className={s.SidebarButton}>Скачати повний прайс у PDF</button>
      <button className={s.SidebarButton}>Залишити відгук</button>
      <button className={s.SidebarButton}>Де забрати</button>
    </div>
  );
};

export default LeftSideBar;
