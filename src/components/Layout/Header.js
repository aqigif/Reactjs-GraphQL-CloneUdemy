import React, { Children } from 'react';
import LogoApp from './../../assets/logo-mejik-academy-1x.png';
import InputText from '../InputText/InputText';
import SearchIcon from '@material-ui/icons/Search';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='left-wrapper'>
        <img src={LogoApp} className='logo-app' alt='logo' />
      </div>
      <div className='center-wrapper'>
        <InputText
          placeholder='Search course here ....'
          iconAffix={<SearchIcon />}
          onChange={e => console.log(e)}
        />
      </div>
    </div>
  );
}

export default Header;
