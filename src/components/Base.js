import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SmoothieContext } from '../context/SmoothieContext';

const Base = () => {
  const { state, order, addBase } = useContext(SmoothieContext);

  const base = state.base;

  return (
    <section id='base'>
      <h3>Step 1: Choose a base</h3>
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
        <div className='next'>
          <Link to='/fruit'>
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

export default Base;
