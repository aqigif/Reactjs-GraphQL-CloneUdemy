import { lazy} from "react";

export const Layout = lazy(() => import('../components/Layout/Layout'));
export const HomeDiscover = lazy(() => import('../features/Course/Pages/HomeDiscover'));
export const CourseDetail = lazy(() => import('../features/Course/Pages/CourseDetail'));
export const MyCourse = lazy(() => import('../features/Course/Pages/MyCourse'));
export const Login = lazy(() => import('../features/Auth/Pages/Login'));
export const notFound404 = lazy(() => import('../features/errors/NotFound404'));

const routeList = [
  {
    path: "/",
    component: Layout,
    hasAuth: false,
    exact: false,
    children: [
      {
        path: "/",
        component: HomeDiscover,
        hasAuth: false,
        exact: false
      },
      {
        path: "/course/:id",
        component: CourseDetail,
        hasAuth: false,
        exact: true
      },
      {
        path: "/my-course",
        component: MyCourse,
        hasAuth: true,
        exact: true
      }
    ]
  },
  {
    path: "/profile",
    component: notFound404,
    hasAuth: true,
    exact: true,
  }
];

export default routeList;