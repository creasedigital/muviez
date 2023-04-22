import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  Dispatch,
  AnyAction,
  StoreEnhancerStoreCreator,
} from 'redux';
import rootReducer from './reducers';

//This is a tuple type for accepted middleware
//If any other middleware is added, the type should be added
type StoreMiddleware = (ThunkMiddleware<{}, AnyAction, undefined> &
  Middleware<{}, any, Dispatch<AnyAction>>)[];

const loggerMiddleware: Middleware<
  {},
  any,
  Dispatch<AnyAction>
> = createLogger();
const enhancers = [];

const middleware: StoreMiddleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension =
    (window as any)['_REDUX_DEVTOOLS_EXTENSION_COMPOSE_'] || compose;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composeEnhancers: (
  ...args: any[]
) => StoreEnhancerStoreCreator<
  {
    dispatch: unknown;
  },
  {}
> = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, composeEnhancers);

export default store;
