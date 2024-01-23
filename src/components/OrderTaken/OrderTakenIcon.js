import React from 'react'
import { FaCheck } from "react-icons/fa";
import classes from "./OrderTakenIcon.module.css"
import { useDispatch } from 'react-redux';
import { authActions } from '../Redux/authSlice';

export default function OrderTakenIcon() {
  const dispatch = useDispatch();

  return (
    <div className={classes.orderTakenIcon} onClick={()=>dispatch(authActions.toggleOrderCart(true))}>
        <FaCheck className={classes.icon} />
    </div>
  )
}
