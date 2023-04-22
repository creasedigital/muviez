import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import PrivateRoutes from './PrivateRoute';
import PublicRoutes from './PublicRoutes';

import { NotFound } from '../views/marketing/pages';

const Loader = lazy(() => import('../components/PageLoader'));

/**
 * Creates an array of routes distinguished into
 * authenticated or unauthenticated.
 */
const routesArray = routes.map((route) =>
  route.auth ? (
    <PrivateRoutes key={route.path} {...route} />
  ) : (
    <PublicRoutes key={route.path} {...route} />
  )
);

const RoutesHandler: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routesArray}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RoutesHandler;
