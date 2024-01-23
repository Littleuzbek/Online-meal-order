import React from "react";
import classes from "./OrderTaken.module.css";
import Modal from "../Cart/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import OrderTakenItem from "./OrderTakenItem";
import { authActions } from "../Redux/authSlice";

export default function OrderTaken() {
  const order = useSelector(state=>state.actions.takenOrder);
  const totalOrderPrice = useSelector((state) => state.actions.totalOrderPrice);
  const dispatch = useDispatch();

  const orderItems = (
    <div>
      <ul className={classes.orderItem}>
        {order ? order?.map((item,index) => (
              <OrderTakenItem
                key={index}
                id={index}
                name={item.name}
                price={item.price}
                amount={item.quantity}
              />
            ))
          : ""}
      </ul>
    </div>
  );

  return (
    <Modal>
      <div className={classes.orderTaken}>
        <h1>Your orders</h1>
        {orderItems}
        <div className={classes.totalAmount}>
          <span>{`Total Price: ${totalOrderPrice}$`} </span>
          <div className={classes.actions}>
            <button
              onClick={() => dispatch(authActions.toggleOrderCart(false))}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
