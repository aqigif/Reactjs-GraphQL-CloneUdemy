import React, { Children } from 'react';
import LogoApp from './../../assets/logo-mejik-academy-1x.png';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='logo-app-wrapper'>
        <img src={LogoApp} className='logo-app' alt='logo' />
      </div>
    </div>
  );
}

export default Header;
