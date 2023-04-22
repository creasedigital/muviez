import { Route, RouteProps } from 'react-router';
import { LazyComponent } from './types';

interface MyRouteProps extends RouteProps {
  component: LazyComponent;
  header?: LazyComponent;
  footer?: LazyComponent;
  advert?: LazyComponent;
  rest?: any;
}

const PublicRoutes: React.FC<MyRouteProps> = ({
  component: Component,
  header: Header,
  footer: Footer,
  advert: Advert,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {Advert && <Advert />}
          {Header && <Header />}
          <Component {...props} />
          {Footer && <Footer />}
        </>
      )}
    />
  );
};

export default PublicRoutes;
