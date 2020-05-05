import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import InputTextStyle from './InputTextStyle';

const InputText = (props) => {
  const classes = InputTextStyle();
  const { placeholder, iconAffix, onChange } = props;
  return (
    <div className={classes.search}>
      {iconAffix && <div className={classes.searchIcon}>
        {iconAffix}
      </div>}
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default InputText;