import { lazy} from "react";

export const Layout = lazy(() => import('../components/Layout/Layout'));
export const Splash = lazy(() => import('../features/Splash/Splash'));
export const notFound404 = lazy(() => import('../features/errors/notFound404'));

const routeList = [
  {
    path: "/",
    component: Layout,
    hasAuth: false,
    children: [
      {
        path: "/splash",
        component: Splash,
        hasAuth: false
      }
    ]
  },
];

export default routeList;