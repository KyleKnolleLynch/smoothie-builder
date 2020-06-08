import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SmoothieContext } from '../context/SmoothieContext';

const sectionVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 12px #53F5B9',
    boxShadow: '0px 0px 12px #fff',
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const Fruit = () => {
  const { state, order, addFruit } = useContext(SmoothieContext);
  const fruits = state.fruits;

  return (
    <motion.section
      id='fruit'
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
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
            <motion.button variants={buttonVariants} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.section>
  );
};

export default Fruit;
