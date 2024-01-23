import React from "react";
import classes from "./TrendingFoods.module.css";
import { useDispatch } from "react-redux";
import { actions } from "../../Redux/actionSlice";

const TrendingFoodForm = ({ id, name, description, price, img }) => {
  const dispatch = useDispatch();

  const addToCart = (id, name, price) => {
    dispatch(actions.addItem({
      id: id,
      name: name,
      price: price,
    }));
  };

  return (
    <div className={classes.cardAnimation} id={id}>
      <img src={img} alt="" className={classes.picFood} />
      <p className={classes.nameFood}>{name}</p>
      <p className={classes.aboutFood}>{description}</p>
      <div className={classes.action}>
        <p className={classes.priceFood}>{price}$</p>
        <p className={classes.buyFood} onClick={()=>{addToCart(id, name, price)}}>
          Add
        </p>
      </div>
    </div>
  );
};

export default TrendingFoodForm;
