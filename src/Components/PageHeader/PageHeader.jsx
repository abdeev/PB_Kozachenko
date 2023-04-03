import PropTypes from "prop-types";
import { useState } from "react";
import { ReactComponent as IconSearch } from "../../static/img/IconSearch.svg";
import { ReactComponent as IconCall } from "../../static/icons/call_icon.svg";
import { ReactComponent as IconMail } from "../../static/icons/mail_new_icon.svg";
import Logo from "../../static/img/Logo Kozachenko transparent.png";
import { toast } from "react-toastify";
import s from "./PageHeader.module.css";
import ContactButton from "Components/ContactButton/ContactButton";

export const PageHeader = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "qwerty") {
      toast.error("Enter something to start search", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.Header}>
      <div className={s.contactsWrapper}>
        <div className={s.ContactsContainer}>
          <div className={s.BtnWrapper}>
            <IconMail className={s.iconCall} />
            <ContactButton
              linkTo="mailto:no-reply@example.com"
              label="Написати e-mail"
            />
          </div>
          <div className={s.BtnWrapper}>
            <IconCall className={s.iconCall} />
            <ContactButton linkTo="tel:+380504540292" label="Подзвонити" />
          </div>
        </div>
        <img src={Logo} alt="main logo Kozachenko" className={s.Logo} />
      </div>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <IconSearch />
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          onChange={handleChange}
          placeholder="Введіть назву товару для пошуку"
        />
      </form>
    </header>
  );
};

PageHeader.propTypes = {
  onSubmit: PropTypes.func,
};
