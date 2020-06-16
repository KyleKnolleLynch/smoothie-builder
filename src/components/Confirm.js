import React, { useContext, useEffect } from 'react';
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
      mass: 0.4,
      damping: 9,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Confirm = () => {
  const { order, setShowModal } = useContext(SmoothieContext);
  let desc;
  order.base === 'Milk' ? (desc = 'a') : (desc = 'an');

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.section
      id='confirm'
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h1>Thank you for your order</h1>
      <span className='pricing'>Current Smoothie Cost: ${order.cost}</span>
      <span className='pricing'>Order Total: ${order.total}</span>
      <motion.p variants={childVariants}>
        You've ordered {desc} {order.base} smoothie with
      </motion.p>
      <motion.ul variants={childVariants}>
        {order.fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </motion.ul>
      {order.toppings.length > 0 && (
        <motion.ul variants={childVariants}>
          <span>topped with</span>
          {order.toppings.map((topping) => (
            <li key={topping}>{topping}</li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
};

export default Confirm;
