import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { actions } from "../Redux/actionSlice";

const CartItem = ({ id, name, price,  amount }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      actions.addItem({
        id,
        price,
      })
    );
  };

  const removeItem = () => {
    dispatch(
      actions.removeItem(id)
    );
  };

  return (
    <li id={id}>
      <p>{name}</p>
      <div className={classes.actions}>
        <button
          className={classes.removeBtn}
          onClick={() => {
            removeItem();
          }}
        >
          -
        </button>
        <span className={classes.amount}>x{amount}</span>
        <button
          className={classes.addBtn}
          onClick={() => {
            addItem();
          }}
        >
          +
        </button>
      </div>
      <span>{price}$</span>
    </li>
  );
};

export default CartItem;
