import React, { useState,useEffect } from 'react';
import classes from './DiscountItems.module.css';
import discountPic from '../../../pictures/10.jpg';
import { useDispatch } from 'react-redux';
import { actions } from '../../Redux/actionSlice';

const DiscountItems = (props) => {
  const [changePic, setChangePic]  = useState(false)
  const dispatch = useDispatch();

  const addToCart = (id, name, price) => {
    dispatch(actions.addItem({
      id: id,
      name: name,
      price: price,
    }));
  };

  useEffect(() => {
    if(changePic === false){
      setTimeout(()=>{
        setChangePic(true)
      },5000)
    }

    if(changePic === true){
      setTimeout(()=>{
        setChangePic(false)
      },2500)
    }

    return () => {}
  }, [changePic])

  return (
    <div id={props.id} className={classes.discountItemCard}>
      {changePic || <img src={props.img} alt='' className={classes.picFood} />}
      {changePic && <img src={discountPic} alt='' className={classes.picFood} />}
      <p className={classes.nameFood}>{props.name}</p>
      <p className={classes.aboutFood}>{props.description}</p>
      <div className={classes.action}>
        <p className={classes.priceFood}>{props.price}$</p>
        <p className={classes.buyFood} onClick={()=>addToCart(props.id,props.name,props.price)}>
          Add
        </p>
      </div>
    </div>
  );
};

export default DiscountItems;
