import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='title'>
        <Link to='/'>
          <h2>Smoothie Builder</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
