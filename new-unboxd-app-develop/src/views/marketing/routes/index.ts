import { lazy } from 'react';
import RouteType from '../../../routes/types';

const home = lazy(() => import('../pages/Valentines-Home'));
const faq = lazy(() => import('../pages/FAQ'));
const privacy = lazy(() => import('../pages/Privacy'));
const terms = lazy(() => import('../pages/Terms'));
const story = lazy(() => import('../pages/Story'));
// const maintenance = lazy(() => import('../pages/Maintenance'));
const demo = lazy(()=> import("../pages/Home/demoWishList"))

const homeHeader = lazy(() => import('../pages/Valentines-Home/header'));
const homeFooter = lazy(()=>import("../pages/Valentines-Home/footer"));
const Advert = lazy(() => import('../../../components/Ads/ValentineAd'));

const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: home,
    header: homeHeader,
    footer: homeFooter,
    advert: Advert,
  },
  {
    path: '/faq',
    exact: true,
    auth: false,
    component: faq,
    header: homeHeader,
    footer: homeFooter,
  },
  {
    path: '/privacy',
    exact: true,
    auth: false,
    component: privacy,
    header: homeHeader,
    footer: homeFooter,
  },
  {
    path: '/terms',
    exact: true,
    auth: false,
    component: terms,
    header: homeHeader,
    footer: homeFooter,
  },
  {
    path: '/story',
    exact: true,
    auth: false,
    component: story,
    header: homeHeader,
    footer: homeFooter,
  },
  {
    path: '/demo',
    exact: true,
    auth: false,
    component: demo,
  }
];

export default routes;
