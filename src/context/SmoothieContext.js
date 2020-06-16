import React, { useState, createContext } from 'react';

export const SmoothieContext = createContext();

const SmoothieContextProvider = (props) => {
  //  menu state
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
    baseCost: 5,
  });

  //  order state
  const [order, setOrder] = useState({
    base: '',
    fruits: [],
    toppings: [],
    cost: 0,
    total: 0,
  });

  //  order functions
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

  const addCost = () => {
    const fruitsTotal = order.fruits.length * 1;
    const toppingsTotal = order.toppings.length * 0.5;
    let tempCost = (fruitsTotal + toppingsTotal + state.baseCost).toFixed(2);
    let tempTotal = (+tempCost + +order.total).toFixed(2);
    setOrder({ ...order, cost: tempCost, total: tempTotal });
  };

  const clearOrder = () => {
    setOrder({
      ...order,
      base: '',
      fruits: [],
      toppings: [],
    });
  };

  //  modal state
  const [showModal, setShowModal] = useState(false);

  return (
    <SmoothieContext.Provider
      value={{
        state,
        order,
        addBase,
        addFruit,
        addToppings,
        showModal,
        setShowModal,
        addCost,
        clearOrder,
      }}
    >
      {props.children}
    </SmoothieContext.Provider>
  );
};

export default SmoothieContextProvider;
