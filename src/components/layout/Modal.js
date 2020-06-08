import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SmoothieContext } from '../../context/SmoothieContext';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
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
        >
          <div className='modal'>
            <div className='modal-content'>
              <h1>My Modal</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                tempora.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
