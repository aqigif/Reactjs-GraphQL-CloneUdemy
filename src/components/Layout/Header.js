import React, { Children } from 'react';
import LogoApp from './../../assets/logo-mejik-academy-1x.png';
import InputText from '../InputText/InputText';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Button } from '@material-ui/core';
import CategoryIcon from './../../assets/category-icon.svg';
import './header.scss';

const Header = (props) => {
  return (
    <div className='header'>
    <div className='header-container'>
      <div className='left-wrapper'>
        <img src={LogoApp} className='logo-app' alt='logo' />
      </div>
      <div className='center-wrapper'>
        <div className='category'>
          <div>
            <img src={CategoryIcon} />
          </div>
          <span className='category-text'>Category</span>
        </div>
        <div className='search-wrapper'>
          <InputText
            placeholder='Search course here ....'
            iconAffix={<SearchIcon />}
            onChange={e => console.log(e)}
          />
        </div>
      </div>
      <div className='right-wrapper'>
        <span className='mode-menu margin-button-horizontal'>Instructor</span>
        <div className='menu-auth' >
          <div className='margin-button-horizontal'>
          <Button variant="outlined" color="primary">
            Login
          </Button>
          </div>
          <div className='margin-button-horizontal'>
          <Button variant="contained" color="primary">
            Register
          </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
