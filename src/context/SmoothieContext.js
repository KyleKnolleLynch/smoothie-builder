import React, { useState, createContext } from 'react';

export const SmoothieContext = createContext();

const SmoothieContextProvider = (props) => {
  const [state] = useState({
    base: ['Ice', 'Milk', 'Almond Milk'],
    fruits: [
      'Banana',
      'Mango',
      'Strawberries',
      'Blueberries',
      'Raspberries',
      'Guava',
    ],
    toppings: [
      'Chia Seeds',
      'Chocolate Chips',
      'Chopped Pecans',
      'Cinnamon',
      'Dried Cherries',
      'Cacao Nibs',
    ],
  });

  const [order, setOrder] = useState({
    base: '',
    fruits: [],
    toppings: [],
  });

  const addBase = (base) => {
    setOrder({ ...order, base });
  };

  const addFruit = (fruit) => {
    let newFruit;
    if (!order.fruits.includes(fruit)) {
      newFruit = [...order.fruits, fruit];
    } else {
      newFruit = order.fruits.filter((item) => item !== fruit);
    }
    setOrder({ ...order, fruits: newFruit });
  };

  const addToppings = (topping) => {
    let newTopping;
    if (!order.toppings.includes(topping)) {
      newTopping = [...order.toppings, topping];
    } else {
      newTopping = order.toppings.filter((item) => item !== topping);
    }
    setOrder({ ...order, toppings: newTopping });
  };

  return (
    <SmoothieContext.Provider
      value={{ state, order, addBase, addFruit, addToppings }}
    >
      {props.children}
    </SmoothieContext.Provider>
  );
};

export default SmoothieContextProvider;
