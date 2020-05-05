import { lazy} from "react";

export const Splash = lazy(() => import('../features/Splash/Splash'));
export const notFound404 = lazy(() => import('../features/errors/notFound404'));

const routeList = [
  {
    path: "/",
    component: Splash,
    hasAuth: false
  },
  {
    path: "/splash",
    component: Splash,
    hasAuth: true,
    children: [

    ]
  }
];

export default routeList;