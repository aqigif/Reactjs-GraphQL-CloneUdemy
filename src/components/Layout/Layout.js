import React from 'react';
import Header from './Header';
import {MappedRoutes} from './../../routes/routes';
import { Switch } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <div className='container'>
      <Header />
      <div className='wrapper'>
        <Switch>
          {children.map((route, i) => {
          console.log(route)
          return (
            <MappedRoutes key={i} {...route} />
          )})}
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
