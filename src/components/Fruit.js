import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SmoothieContext } from '../context/SmoothieContext';

const Fruit = () => {
  const { state, order, addFruit } = useContext(SmoothieContext);
  const fruits = state.fruits;

  return (
    <section id='fruit'>
      <h3>Step 2: Select Fresh Fruits</h3>
      <ul>
        {fruits.map((fruit) => {
          let spanClass = order.fruits.includes(fruit) ? 'active' : '';
          return (
            <motion.li
              key={fruit}
              onClick={() => addFruit(fruit)}
              whileHover={{ scale: 1.3, color: '#31A87C' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{fruit}</span>
            </motion.li>
          );
        })}
      </ul>

      {order.fruits.length > 0 && (
        <div className='next'>
          <Link to='/toppings'>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 12px #53F5B9',
                boxShadow: '0px 0px 12px #fff',
              }}
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Fruit;
