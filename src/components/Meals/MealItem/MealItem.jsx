import React from "react";
import styles from '../../../Modules/MealItem.module.scss'
import { MealItemForm } from "./MealItemForm";

export const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm/>
      </div>
    </li>
  );
};
 