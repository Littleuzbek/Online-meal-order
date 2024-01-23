import React, {  useState } from 'react';
import classes from './catologFoods.module.css';
import pizza from '../../../pictures/pizza-slice.png';
import burger from '../../../pictures/burger.png';
import classicFood from '../../../pictures/classicFood.png';
import salad from '../../../pictures/salad.png';
import drink from '../../../pictures/drink.png';
import taco from '../../../pictures/taco.png';
import Pizza from './Pizza';
import Burger from './Burger';
import Taco from './Taco';
import ClassicFood from './ClassicFood';
import Salad from './Salad';
import Drink from './Drink';
import {
  storePizza,
  storeBurger,
  storeSalad,
  storeClassicFood,
  storeTaco,
  storeDrink,
} from './info/Info';

const Catolog = () => {
  const [piza, setPiza] = useState(true);
  const [burg, setBurg] = useState(false);
  const [tac, setTac] = useState(false);
  const [clcF, setClcF] = useState(false);
  const [sald, setSald] = useState(false);
  const [drnk, setDrnk] = useState(false);

  const onPizza = () => {
    setPiza(true);
    setBurg(false);
    setTac(false);
    setClcF(false);
    setSald(false);
    setDrnk(false);
  };
  const onBurger = () => {
    setPiza(false);
    setBurg(true);
    setTac(false);
    setClcF(false);
    setSald(false);
    setDrnk(false);
  };
  const onTaco = () => {
    setBurg(false);
    setPiza(false);
    setTac(true);
    setClcF(false);
    setSald(false);
    setDrnk(false);
  };
  const onClcFood = () => {
    setBurg(false);
    setPiza(false);
    setTac(false);
    setClcF(true);
    setSald(false);
    setDrnk(false);
  };
  const onSald = () => {
    setBurg(false);
    setPiza(false);
    setTac(false);
    setClcF(false);
    setSald(true);
    setDrnk(false);
  };
  const onDrink = () => {
    setBurg(false);
    setPiza(false);
    setTac(false);
    setClcF(false);
    setSald(false);
    setDrnk(true);
  };

  const Pizzalist = storePizza.map((meal) => (
    <Pizza 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const BurgerList = storeBurger.map((meal) => (
    <Burger
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const ClassicFoodList = storeClassicFood.map((meal) => (
    <ClassicFood
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const TacoList = storeTaco.map((meal) => (
    <Taco
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const SaladList = storeSalad.map((meal) => (
    <Salad
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const DrinkList = storeDrink.map((meal) => (
    <Drink
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <div className={classes.wholeCatolog}>
      <div className={classes.catologMenu}>
        <img src={pizza} alt='' onClick={onPizza} />
        <img src={burger} alt='' onClick={onBurger} />
        <img src={taco} alt='' onClick={onTaco} />
        <img src={classicFood} alt='' onClick={onClcFood} />
        <img src={salad} alt='' onClick={onSald} />
        <img src={drink} alt='' onClick={onDrink} />
      </div>

      <div className={classes.catologFoods}>
        {piza && Pizzalist}
        {burg && BurgerList}
        {tac && TacoList}
        {clcF && ClassicFoodList}
        {sald && SaladList}
        {drnk && DrinkList}
      </div>
      </div>
  );
};

export default Catolog;
