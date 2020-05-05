import React, { Children } from 'react';
import Header from './Header';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
