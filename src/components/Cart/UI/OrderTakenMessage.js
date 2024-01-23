import React from "react";
import './OrderTakenMessage.css'

export default function OrderTakenMessage() {
  return (
    <div className='OrderTaken'>
      <p>Your order has been taken</p>
      <div className='success-checkmark'>
        <div className='check-icon'>
          <span className='icon-line line-tip'></span>
          <span className='icon-line line-long'></span>
          <div className='icon-circle'></div>
          <div className='icon-fix'></div>
        </div>
      </div>
    </div>
  );
}
