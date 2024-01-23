import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import MainBody from "./components/Body/mainBody";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartIcon from "./components/Cart/CartIcon";
import OrderTakenIcon from "./components/OrderTaken/OrderTakenIcon";
import OrderTaken from "./components/OrderTaken/OrderTaken";
import { useSelector } from "react-redux";

export default function App() {
  const toggleCart = useSelector((state) => state.auth.Cart);
  const toggleOrderCart = useSelector((state) => state.auth.OrderCart);
  const appearOrderCart = useSelector((state) => state.auth.appearOrderCart);

  return (
    <div className={classes.wholeBody}>
      {toggleCart && <Cart />}
      {toggleOrderCart && <OrderTaken />}
      <Header />
      <MainBody />
      <Footer />
      {appearOrderCart ? toggleOrderCart || <OrderTakenIcon /> : ""}
      {toggleCart || <CartIcon />}
    </div>
  );
}
