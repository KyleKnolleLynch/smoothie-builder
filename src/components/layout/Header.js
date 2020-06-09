import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import svg from '../../assets/mango-banana.svg';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        {/* <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg> */}
      </div>
      <motion.div
        className='title'
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 130 }}
      >
        <h2>
          <Link to='/'>
            <span>Smoothie Builder</span>
          </Link>
        </h2>
      </motion.div>
    </header>
  );
};

export default Header;
