import { lazy } from 'react';
import RouteType from '../../../routes/types';

const home = lazy(() => import('../pages/Home'));
const dashboard = lazy(() => import('../pages/Dashboard'));
const Merchant = lazy(() => import('../pages/Merchant'));

const header = lazy(() => import('../../marketing/pages/Home/header'));
const footer = lazy(() => import('../../marketing/pages/Home/footer'));


const routes: RouteType[] = [
  {
    path: '/merchants',
    exact: true,
    auth: false,
    component: home,
    header,
    footer
  },
  {
    path: '/merchants/@:merchant',
    exact: true,
    auth: false,
    component: Merchant,
  },
  {
    path: '/merchants/@:merchant/:slug',
    exact: true,
    auth: false,
    component: dashboard,
  },
];

export default routes;
