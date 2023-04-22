import { lazy } from 'react';
import RouteType from '../../../routes/types';

const dashboard = lazy(() => import('../pages/Dashboard'));
const wallet = lazy(() => import('../pages/Wallet'));
const payout = lazy(() => import('../pages/Wallet/WalletPayout'));
const profile = lazy(() => import('../pages/Profile'));
const settings = lazy(() => import('../pages/Settings'));
const wishlist = lazy(() => import('../pages/Wishlist/WishlistPage'));
const singleWishlist = lazy(() => import('../pages/Wishlist'));
const createWishlist = lazy(() => import('../pages/Wishlist/add'));
const EditWishList = lazy(() => import('../pages/Wishlist/edit'));
const addGift = lazy(() => import('../pages/Gift/add'));
const editGift = lazy(() => import('../pages/Gift/edit'));

const routes: RouteType[] = [
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: dashboard,
  },
  {
    path: '/profile',
    exact: true,
    auth: true,
    component: profile,
  },
  {
    path: '/settings',
    exact: true,
    auth: true,
    component: settings,
  },
  {
    path: '/wallet',
    exact: true,
    auth: true,
    component: wallet,
  },
  {
    path: '/wallet/request-payout',
    exact: true,
    auth: true,
    component: payout,
  },
  {
    path: '/wishlist',
    exact: true,
    auth: true,
    component: wishlist,
  },
  {
    path: '/wishlist/create',
    exact: true,
    auth: true,
    component: createWishlist,
  },

  {
    path: '/wishlist/:slug',
    exact: true,
    auth: true,
    component: singleWishlist,
  },
  {
    path: '/wishlist/:slug/edit',
    exact: true,
    auth: true,
    component: EditWishList,
  },
  {
    path: '/wishlist/:slug/add-gift',
    exact: true,
    auth: true,
    component: addGift,
  },
  {
    path: '/wishlist/:slug/edit-gift/:id',
    exact: true,
    auth: true,
    component: editGift,
  },
];

export default routes;
