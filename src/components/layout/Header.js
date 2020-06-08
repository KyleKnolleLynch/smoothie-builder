import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <motion.div
        className='title'
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 130 }}
      >
        <a href='/'>
          <h4>Smoothie Builder</h4>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
