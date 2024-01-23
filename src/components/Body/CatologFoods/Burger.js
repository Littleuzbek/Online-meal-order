import React from "react";
import classes from "./catologFoods.module.css";
import burger from "../../../pictures/burger.jpg";
import { useDispatch } from "react-redux";
import { actions } from "../../Redux/actionSlice";

const Burger = (props) => {
  const dispatch = useDispatch();

  const addToCart = (id, name, price) => {
    dispatch(actions.addItem({
      id: id,
      name: name,
      price: price,
    }));
  };

  return (
    <div id={props.id} className={classes.catologCard}>
      <div className={classes.cardAnimation}>
        <img src={burger} alt="" className={classes.picFood} />
        <p className={classes.nameFood}>{props.name}</p>
        <p className={classes.aboutFood}>{props.description}</p>
        <div className={classes.actions}>
          <p className={classes.priceFood}>{props.price}$</p>
          <p className={classes.buyFood} onClick={()=>addToCart(props.id,props.name,props.price)}>
            Add
          </p>
        </div>
      </div>
    </div>
  );
};

export default Burger;