import RouteType from './types';
import authRoutes from '../views/auth/routes';
import contributorRoutes from '../views/contributor/routes';
import beneficiaryRoutes from '../views/beneficiary/routes';
import marketingRoutes from '../views/marketing/routes';
import merchantRoutes from '../views/merchants/routes';

const combinedRoutes: RouteType[] = [
  ...authRoutes,
  ...beneficiaryRoutes,
  ...contributorRoutes,
  ...marketingRoutes,
  ...merchantRoutes
];

export default combinedRoutes;
