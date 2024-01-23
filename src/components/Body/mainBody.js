import React from "react";
import AboutServis from "./AboutServis/AboutServis";
import Catolog from "./CatologFoods/Catolog";
import DiscountParty from "./DiscountParty/DiscountParty";
import classes from "./mainBody.module.css";
import TrendingFood from "./TrendingFoods/TrendingFood";

const MainBody = (props) => {
  return (
    <div className={classes.mainBody}>
      <p className={classes.choiceTitle}>Choice of many customers</p>

      <TrendingFood key={props.id} />
      <Catolog />
      <DiscountParty />
      <AboutServis />
    </div>
  );
};

export default MainBody;
