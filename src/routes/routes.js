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
    routesData = routeList.filter((item) => item.hasAuth);
  }
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routesData.map((route, i) => (
            <MappedRoutes key={i} {...route} />
          ))}
          <Route component={notFound404} />
        </Switch>
      </Suspense>
    </Router>
  );
}

const MappedRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.children} />
      )}
    />
  );
}

export default Routes;