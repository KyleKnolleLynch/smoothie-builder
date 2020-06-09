import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SmoothieContext } from '../../context/SmoothieContext';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '20rem',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = () => {
  const { showModal } = useContext(SmoothieContext);
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='modal-container'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div className='modal' variants={modalVariants}>
            <h4>Like to build another?</h4>
            <Link to='/'>
              <button>Let's Go!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
