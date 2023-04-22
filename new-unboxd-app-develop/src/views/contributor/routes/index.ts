import { lazy } from 'react';
import RouteType from '../../../routes/types';

const wishlist = lazy(() => import('../pages/Wishlist'));
const gift = lazy(() => import('../pages/gift'));
const user = lazy(() => import('../pages/User'));

const routes: RouteType[] = [
  {
    path: '/@:username',
    exact: true,
    auth: false,
    component: user,
  },
  {
    path: '/@:username/:slug',
    exact: true,
    auth: false,
    component: wishlist,
  },
  {
    path: '/@:username/:slug/:id',
    exact: true,
    auth: false,
    component: gift,
  },
];

export default routes;
