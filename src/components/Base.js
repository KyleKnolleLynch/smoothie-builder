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

const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
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

const Base = () => {
  const { state, order, addBase } = useContext(SmoothieContext);
  const base = state.base;

  return (
    <motion.section
      id='base'
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 1: Choose a base</h3>
      <span className='pricing'>Base Cost: ${state.baseCost}</span>
      <ul>
        {base.map((base) => {
          let spanClass = order.base === base ? 'active' : '';

          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: '#31A87C' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {order.base && (
        <motion.div className='next' variants={nextVariants}>
          <Link to='/fruit'>
            <motion.button variants={buttonVariants} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Base;
