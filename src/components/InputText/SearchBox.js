import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearcBoxStyle from './SearchBoxStyle';

const SearcBox = (props) => {
  const classes = SearcBoxStyle();
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

export default SearcBox;