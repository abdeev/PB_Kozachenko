import axios from "axios";
import TG_KEYS from "../api/envVars/constForTGBot.json";

const tg_token = `${TG_KEYS.TG_TOKEN}`;
const TG_URL = `https://api.telegram.org/bot${tg_token}/sendMessage`;
const TG_CHAT_ID = `${TG_KEYS.CHAT_ID}`;
const TelegramSendMessage = async (message) => {
  try {
    const res = await axios.post(TG_URL, {
      chat_id: TG_CHAT_ID,
      text: message,
    });
    console.log(res);
    // Display toast message on success
    alert("Ваша заявка відправлена у обробку!");
  } catch (err) {
    console.warn(err);
  }
};

export default TelegramSendMessage;
