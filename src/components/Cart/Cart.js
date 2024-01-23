import React, {  useState } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "./UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import OrderTakenMessage from "./UI/OrderTakenMessage";
import { actions } from "../Redux/actionSlice";
import {authActions} from '../Redux/authSlice'

const Cart = () => {
  const [showMessage,setShowMessage] = useState(false);
  const itemStore = useSelector((state) => state.actions.itemStore);
  const totalPrice = useSelector((state) => state.actions.totalPrice);
  const dispatch = useDispatch();
  const hasItems = totalPrice > 0;

  const  showMessageHandeler = () => {
    setShowMessage(!showMessage)
    dispatch(actions.addToTakenOrder())
    dispatch(authActions.appearOrderCart(true))

    const clearingTakenOrderCart = setTimeout(() => {
      dispatch(authActions.appearOrderCart(false))
    }, 60000);

    return ()=>{
      clearTimeout(clearingTakenOrderCart)
    }
    
  };
  const cartItems = (
    <ul className={classes.cartItem}>
      {itemStore? itemStore?.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.quantity}
          />
          )) : ''}
    </ul>
  );
  
  return (
    <Modal >
      {showMessage ? (
        <OrderTakenMessage />
      ) : (
        <div className={classes.cart}>
          {cartItems}
          <div className={classes.totalAmount}>
            <span>{`Total Price: ${totalPrice}$`} </span>
            <div className={classes.actions}>
              <button onClick={()=>dispatch(authActions.toggleCart(false))}>Close</button>
              {hasItems && (
                <button onClick={showMessageHandeler}>Order</button>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
