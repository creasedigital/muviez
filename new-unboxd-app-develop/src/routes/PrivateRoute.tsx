//in PrivateRoute.tsx
import React, { useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { LazyComponent } from './types';
import { IdleTimer } from '../utils/helpers';
import { logoutUser } from '../views/auth/pages/Login/redux/actions';
interface MyRouteProps extends RouteProps {
  component: LazyComponent;
  authenticated: boolean;
  header?: LazyComponent;
  rest?: any;
}

const PrivateRoute: React.FC<MyRouteProps> = ({
  component: Component,
  header: Header,
  authenticated,
  ...rest
}) => {
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const handleGetTimeRemaining = (time: number) => {
    if (time === 0) {
      setLogout(true);
    }
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <IdleTimer
            getTimeRemaining={handleGetTimeRemaining}
            timeout={+process.env.REACT_APP_INACTIVITY_TIMEOUT! as number}
          >
            {Header && <Header />}
            <Component {...props} />
            {logout && dispatch(logoutUser())}
          </IdleTimer>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
