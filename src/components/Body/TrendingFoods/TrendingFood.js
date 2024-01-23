import React from "react";
import classes from './TrendingFoods.module.css';
import TrendingFoodForm from "./TrendingFoodForm";
import {trendingFoodInfo} from "../CatologFoods/info/Info"

const trendingFood =trendingFoodInfo.map(meal => (
    <TrendingFoodForm   
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    img={meal.img}
    />
))

const TrendingFood =()=>{

     return (
        <div className={classes.choices}> 
            {trendingFood}
        </div>        
     )
}

export default TrendingFood