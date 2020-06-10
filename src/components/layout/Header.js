import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { skew: -90 },
  visible: {
    skew: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    fill: 'rgba(255,255,255,0)',
    pathLength: 0,
  },
  visible: {
    fill: 'rgba(255,255,255,1)',
    pathLength: 1,
    transition: {
      duration: 3,
      ease: 'easeIn',
    },
  },
};

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <motion.svg
          variants={svgVariants}
          initial='hidden'
          animate='visible'
          version='1.1'
          className='smoothie-svg'
          xmlns='http://www.w3.org/2000/svg'
          xmlns='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 512 512'
        >
          <g>
            <g>
              <motion.path
                variants={pathVariants}
                d='M251.533,184.605l8.06-112.845c52.136,5.649,92.864,50.108,92.864,103.491h15.59c0-61.343-47.124-112.796-107.343-119.052
			l1.598-22.371c0.733-10.227,9.335-18.237,19.588-18.237h14.421V0h-14.421c-18.391,0-33.826,14.37-35.137,32.717l-1.635,22.887
			c-64.508,1.738-116.455,55.242-116.455,119.647h15.59c0-55.711,44.357-101.701,99.747-104.004l-8.097,113.358h-58.895v15.59
			h57.782l-1.113,15.59H119.844v-15.59h40.535v-15.59h-56.125v46.771h25.009L153.279,512H343.43l24.035-280.624h24.689v-46.771
			H251.533z M144.909,231.376h87.654l-0.594,8.315h-86.347L144.909,231.376z M329.119,496.41H167.593l-20.636-241.129h83.899
			l-14.253,199.548l15.55,1.11l14.333-200.659h103.285L329.119,496.41z M351.106,239.691H247.598l0.594-8.315h103.625
			L351.106,239.691z M376.563,215.786H249.306l1.113-15.59h126.145V215.786z'
              />
            </g>
          </g>
          <g>
            <g>
              <motion.rect
                variants={pathVariants}
                x='304.85'
                y='0.64'
                width='95.0'
                height='15.59'
              />
            </g>
          </g>
          <g>
            <g>
              <motion.path
                variants={pathVariants}
                d='M264.314,95.911v15.59c27.023,0,48.179,21.136,48.179,48.159h15.59C328.084,124.323,299.652,95.911,264.314,95.911z'
              />
            </g>
          </g>
        </motion.svg>
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
