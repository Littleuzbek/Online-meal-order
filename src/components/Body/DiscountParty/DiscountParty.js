import React, { Fragment, useState } from 'react';
import classes from './DiscountParty.module.css';
import DiscountItems from './DiscountItems';
import { discountItemsInfo } from '../CatologFoods/info/Info';

const DiscountParty = () => {
  const [toggle, setToggle] = useState(false);

  const showDiscountItems = () => {
    setToggle(true);
  };

  const discountItems = discountItemsInfo.map((meal) => (
    <DiscountItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));

    const classChange = `${toggle ? classes.discountItems : classes.discountParty}`

  return (
    <Fragment>
      <div className={classChange}>
        {toggle || (
          <div className={classes.offerTitle}>
            <p>OUR LIMITED OFFER</p>
            <p>BUY 3 BURGER GET 1 FOR FREE</p>
            <p onClick={showDiscountItems}>Read more</p>
          </div>
        )}
        {toggle && discountItems}
      </div>
    </Fragment>
  );
};

export default DiscountParty;
