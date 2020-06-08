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

const Toppings = () => {
  const { state, order, addToppings } = useContext(SmoothieContext);
  const toppings = state.toppings;

  return (
    <motion.section
      id='toppings'
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 3: Choose Toppings</h3>
      <span className='toppings-option'>~ optional ~</span>
      <ul>
        {toppings.map((topping) => {
          let activeClass = order.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addToppings(topping)}
              whileHover={{ scale: 1.3, color: '#31A87C' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={activeClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <div className='next'>
        <Link to='/confirm'>
          <motion.button variants={buttonVariants} whileHover='hover'>
            Order
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Toppings;
