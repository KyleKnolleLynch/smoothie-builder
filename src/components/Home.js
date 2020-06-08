import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section id='home' animate={{}}>
      <h1>Welcome To Smoothie Builder!</h1>
      <Link to='/base'>
        <motion.button whileHover={{ 
          scale: 1.1,
          textShadow: '0px 0px 12px #53F5B9',
          boxShadow: '0px 0px 12px #fff'
          }}>
          Let's get to building
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default Home;
