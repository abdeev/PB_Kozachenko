import ButtonMailto from "../ButtonMailto/ButtonMailto";
import ButtonPhoneto from "../ButtonPhoneto/ButtonPhoneto";
import s from "./ContactUs.module.css";

export const ContactUs = () => {
  return (
    <div className={s.ContactsContainer}>
      <ButtonMailto
        mailto="mailto:no-reply@example.com"
        label="Написати E-Mail"
      />
      <ButtonPhoneto tel="tel:+380504540292" label="Подзвонити нам" />
    </div>
  );
};
