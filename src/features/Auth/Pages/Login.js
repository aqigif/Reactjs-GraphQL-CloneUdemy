import React from 'react';
import '../../Course/Course.scss';
import { withRouter } from 'react-router-dom';
import './../Auth.scss';
import LogoApp from './../../../assets/Logo.png';
import InputText from './../../../components/InputText/InputText';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';
const Login = (props) => {
  return (
    <div className="login-container">
      <img src={LogoApp} />
      <span className="login-welcome">Login</span>
      <span className="login-welcome-desc">Login and start managing your learning process!</span>
      <div className="email-group">
        <span className="email-label">Email</span>
        <div className="email-input">
          <InputText placeholder="e.g aqil@gmail.com" />
        </div>
      </div>
      <div className="email-group">
        <span className="email-label">Password</span>
        <div className="email-input">
          <InputText placeholder="Input your password" type="password" />
        </div>
      </div>
      <div className="opsional-group">
        <div className="keep-me-sign-group">
          <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
        </div>
        <span className="forgot-pass">Forgotten your password?</span>
      </div>
      <div className='margin-button-horizontal' id='button-orange'>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </div>
      <span className="register">Don't you have an account yet? Register here</span>
    </div>
  );
}

export default withRouter(Login);
