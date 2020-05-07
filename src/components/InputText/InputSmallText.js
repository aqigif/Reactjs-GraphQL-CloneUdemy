import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import InputSmallTextStyle from './InputSmallTextStyle';

const InputSmallText = (props) => {
  const { placeholder, onChange, rows, value } = props;

  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const classes = InputSmallTextStyle();

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
        rows={rows}
        multiline={rows?true:false}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
}

export default InputSmallText;