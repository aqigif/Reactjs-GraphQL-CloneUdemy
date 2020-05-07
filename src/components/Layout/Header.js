import React from 'react';
import LogoApp from './../../assets/logo-mejik-academy-1x.png';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import CategoryIcon from './../../assets/category-icon.svg';
import './header.scss';
import { withRouter } from 'react-router-dom';
import SearcBox from '../InputText/SearchBox';
import authcheck from '../../utils/authcheck';
import usermode from '../../utils/usermode';

const Header = (props) => {
  const {
    history
  } = props;
  const switchUser = () => {
    if(usermode()){
      localStorage.setItem('userMode','student');
    } else {
      localStorage.setItem('userMode', 'instructor');
    }
    history.push('/')
    window.location.reload()
  }
  return (
    <div className='header'>
    <div className='header-container'>
      <div className='left-wrapper'>
        <img src={LogoApp} className='logo-app' alt='logo-app-mejik' onClick={()=> history.push('/home')} />
      </div>
      <div className='center-wrapper'>
        <div className='category'>
          <div>
            <img src={CategoryIcon} alt='category-mejik' />
          </div>
          <span className='category-text'>Category</span>
        </div>
        <div className='search-wrapper'>
          <SearcBox
            placeholder='Search course here ....'
            iconAffix={<SearchIcon />}
            onChange={e => console.log(e)}
          />
        </div>
      </div>
      {authcheck() ?
      <div className='right-wrapper'>
        <span className='mode-menu margin-button-horizontal' onClick={()=> history.push('/my-course')}>My Course</span>
        <div className='menu-auth' >
          <div className='margin-button-horizontal' id='button-primary'>
            <Button variant="outlined" color="primary" onClick={switchUser}>
              {usermode() ? 'Switch to Student View' : 'Switch to Instructor View'}
            </Button>
          </div>
        </div>
      </div>:
      <div className='right-wrapper'>
        <span className='mode-menu margin-button-horizontal'>Instructor</span>
        <div className='menu-auth' >
          <div className='margin-button-horizontal' id='button-blue'>
            <Button variant="outlined" color="primary" onClick={() => history.push('/login')}>
              Login
            </Button>
          </div>
          <div className='margin-button-horizontal' id='button-blue'>
            <Button variant="contained" color="primary">
              Register
            </Button>
          </div>
        </div>
      </div>}
      </div>
    </div>
  );
}

export default withRouter(Header);
