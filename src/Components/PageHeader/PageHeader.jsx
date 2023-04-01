import PropTypes from "prop-types";
import { useState } from "react";
import { ReactComponent as IconSearch } from "../../static/img/IconSearch.svg";
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
    if (query.trim() === "") {
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
      <div className={s.ContactsContainer}>
        <ContactButton
          linkTo="mailto:no-reply@example.com"
          label="Написати e-mail"
        />
        <ContactButton linkTo="tel:+380504540292" label="Подзвонити" />
      </div>
      <img src={Logo} alt="main logo Kozachenko" className={s.Logo} />
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
          placeholder="Введіть назву товару..."
        />
      </form>
    </header>
  );
};

PageHeader.propTypes = {
  onSubmit: PropTypes.func,
};
