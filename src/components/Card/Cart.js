import React from "react";
import styles from "./Cart.module.scss";
import  {Modal}  from "../UI/Modal";

export const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "m1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>33.33</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
