import React from "react";
import styles from "../../../Modules/MealItemForm.module.scss";
import { Input } from "../../UI/Input";

export const MealItemForm = (props) => {
  return (
    <form action="" className={styles.form}>
      <Input
        label="Amount"
        inpuy={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
