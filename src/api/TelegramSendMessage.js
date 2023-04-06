import axios from "axios";
import TG_KEYS from "../api/envVars/constForTGBot.json";
import Notiflix from "notiflix";

const tg_token = `${TG_KEYS.TG_TOKEN}`;
const TG_URL = `https://api.telegram.org/bot${tg_token}/sendMessage`;
const TG_CHAT_ID = `${TG_KEYS.CHAT_ID}`;
const TelegramSendMessage = (message) => {
  axios
    .post(TG_URL, {
      chat_id: TG_CHAT_ID,
      text: message,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.warn(err))
    .finally(Notiflix.Notify.success("Замовлення відправлено!"));
};

export default TelegramSendMessage;
