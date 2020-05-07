import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import InputTextStyle from './InputTextStyle';
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const InputText = (props) => {
  const { placeholder, onChange, type, value } = props;

  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const classes = InputTextStyle();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.container}>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        type={(values.showPassword ? 'text' : type)}
        endAdornment={ type === 'password' &&
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}

export default InputText;