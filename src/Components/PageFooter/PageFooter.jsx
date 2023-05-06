import PropTypes from "prop-types";
import { ReactComponent as IconCall } from "../../static/icons/call_icon.svg";
import { ReactComponent as IconMail } from "../../static/icons/mail_new_icon.svg";
import Logo from "../../static/img/Logo Kozachenko transparent.png";
import s from "./PageFooter.module.css";
import ContactButton from "Components/ContactButton/ContactButton";

export const PageFooter = () => {
  return (
    <footer className={s.Footer}>
      <div className={s.linksWrapper}>
        <p className={s.footerLink}>Як проїхати до нас</p>
        <p className={s.footerLink}>Типовий договір поставки</p>
        <p className={s.footerLink}>Сертифікати якості</p>
      </div>
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
    </footer>
  );
};

PageFooter.propTypes = {
  onSubmit: PropTypes.func,
};
