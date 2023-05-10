import s from "./OrderInfo.module.css";
const OrderInfo = ({ cart }) => {
  return (
    <div className={s.infoBox}>
      <span className={s.infoBox_title}>Ваше замовлення:</span>
      <span className={s.infoBox_number}>{cart.length - 1} поз.</span>
      <span className={s.infoBox_title}>на загальну суму:</span>
      <span className={s.infoBox_number}>
        {cart
          .reduce((acc, i) => {
            if (isNaN(i.Price * i.Order)) return acc;
            return acc + i.Price * i.Order;
          }, 0)
          .toFixed(2)}{" "}
        грн.
      </span>
    </div>
  );
};
export default OrderInfo;
