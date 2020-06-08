import React, { useContext } from 'react';
import { SmoothieContext } from '../context/SmoothieContext';

const Confirm = () => {
  const { order } = useContext(SmoothieContext);
  let desc;
  order.base === 'Milk' ? (desc = 'a') : (desc = 'an');

  return (
    <section id='confirm'>
      <h1>Thank you for your order</h1>
      <p>
        You've ordered {desc} {order.base} smoothie with
      </p>

      <ul>
        {order.fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {order.toppings.length > 0 && (
        <ul>
          <span>topped with</span>
          {order.toppings.map((topping) => (
            <li key={topping}>{topping}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Confirm;
