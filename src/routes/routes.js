import React, { Suspense } from "react";
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";

import routeList, { notFound404, Login, routeInstructorList } from './routeList';
import authcheck from "../utils/authcheck";
import usermode from "../utils/usermode";
const history = createBrowserHistory();

const Routes = () => {
  let routesData;
  const auth = authcheck();
  const routes = usermode() ? routeInstructorList : routeList;
  if (auth) {
    routesData = routes;
  } else {
    routesData = routes.filter((item) => !item.hasAuth);
  }
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/login' component={Login} exact/>
          {routesData.map((route, i) => (
            <MappedRoutes key={i} {...route} />
          ))}
          <Route component={notFound404} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export const MappedRoutes = (route) => {
  const {
    component,
    path,
    exact,
    children
  } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={RenderedRoute(component, children)}
    />
  );
}

const RenderedRoute = (Component, children) => (props) => {
  const { location } = props;
  const { pathname } = location;
  let childData
  const auth = authcheck();
  if (auth) {
    childData = children;
  } else {
    childData = children ? children.filter((item) => !item.hasAuth) : [];
  }
  return (<Component {...props} children={childData} />);
};

export default Routes;