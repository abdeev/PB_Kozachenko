import PropTypes from "prop-types";
import { useState } from "react";
import { ReactComponent as IconSearch } from "../../static/img/IconSearch.svg";
import { ContactUs } from "../ContactUs/ContactUs";
import Logo from "../../static/img/logoKozachenko.png";
import { toast } from "react-toastify";
import css from "./PageHeader.module.css";

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
    <header className={css.Header}>
      <ContactUs />
      <img src={Logo} alt="main logo Kozachenko" className={css.Logo} />
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <IconSearch />
        </button>

        <input
          className={css.SearchForm_input}
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
