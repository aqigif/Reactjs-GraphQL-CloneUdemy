import React, { Suspense } from "react";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";

import routeList, { notFound404 } from './routeList';
const history = createBrowserHistory();

const Routes = () => {
  let routesData;
  const auth = false;
  if (auth) {
    routesData = routeList;
  } else {
    routesData = routeList.filter((item) => !item.hasAuth);
  }
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routeList.map((route, i) => (
            <MappedRoutes key={i} {...route} />
          ))}
          <Route component={notFound404} />
          <Route path='/login' component={notFound404} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export const MappedRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      children={props => (
        <route.component {...props} children={route.children} />
      )}
    />
  );
}

export default Routes;