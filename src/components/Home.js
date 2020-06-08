import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
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

const Home = () => {
  return (
    <motion.section
      id='home'
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h1>Welcome To Smoothie Builder!</h1>
      <div className='next'>
        <Link to='/base'>
          <motion.button variants={buttonVariants} whileHover='hover'>
            Let's get to building
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Home;
