import React from 'react';
import classes from './AboutServis.module.css';
import ingredient from '../../../pictures/ingredient.png';
import chef from '../../../pictures/chef.png';
import alarmClock from '../../../pictures/alarm-clock.png';

const AboutServis = () => {
  return (
    <div className={classes.aboutServis}>
      <div>
        <img src={alarmClock} alt='' />
        <p>60 min Delivery</p>
      </div>
      <div>
        <img src={chef} alt='' />
        <p>Best chefs</p>
      </div>
      <div>
        <img src={ingredient} alt='' />
        <p>Fresh ingredients</p>
      </div>
    </div>
  );
};

export default AboutServis;
