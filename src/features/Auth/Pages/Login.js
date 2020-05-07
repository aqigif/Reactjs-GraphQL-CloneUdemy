import React from 'react';
import '../../Course/Course.scss';
import { withRouter } from 'react-router-dom';
import './../Auth.scss';
import LogoApp from './../../../assets/Logo.png';
import InputText from './../../../components/InputText/InputText';
import { FormControlLabel, Checkbox, Button, Snackbar } from '@material-ui/core';
import { LOGIN } from '../actions';
import { apiUrl } from '../../../utils/client';
import MuiAlert from '@material-ui/lab/Alert';
import authcheck from '../../../utils/authcheck';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = (props) => {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });

  React.useEffect(()=>{
    if(authcheck()){
      props.history.push('/')
    }
  },[]);
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onLogin = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: LOGIN,
        variables: {
          input: {
            email: values.email,
            password: values.password,
          }
        }
      })
    })
      .then(r => r.json())
      .then(data => {
        if(data.errors){
          setOpen(true);
          snackbar('Sorry, Invalid Login', 'error')
        } else {
          localStorage.setItem('token', data?.data?.token);
          props.history.push('/');
        }
      });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const snackbar = (message, severity) => (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
  
  return (
    <div className="login-container">
      <img src={LogoApp} />
      <span className="login-welcome">Login</span>
      <span className="login-welcome-desc">Login and start managing your learning process!</span>
      <div className="email-group">
        <span className="email-label">Email</span>
        <div className="email-input">
          <InputText placeholder="e.g aqil@gmail.com" value={values.email} onChange={handleChange('email')} type="text" />
        </div>
      </div>
      <div className="email-group">
        <span className="email-label">Password</span>
        <div className="email-input">
          <InputText placeholder="Input your password" value={values.password} type="password" onChange={handleChange('password')} />
        </div>
      </div>
      <div className="opsional-group">
        <div className="keep-me-sign-group">
          <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
        </div>
        <span className="forgot-pass">Forgotten your password?</span>
      </div>
      <div className='margin-button-horizontal' id='button-orange'>
        <Button variant="contained" color="primary" onClick={onLogin}>
          Login
        </Button>
      </div>
      <span className="register">Don't you have an account yet? Register here</span>
    </div>
  );
}

export default withRouter(Login);
