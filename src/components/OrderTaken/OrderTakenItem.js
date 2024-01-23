import React from "react";
import classes from "./OrderTakenItem.module.css";

const OrderTakenItem = ({ id, name, amount }) => {
  return (
    <li id={id}>
      <p>{name}</p>
      <div className={classes.actions}>
        <span className={classes.amount}>x{amount}</span>
      </div>
    </li>
  );
};

export default OrderTakenItem;
