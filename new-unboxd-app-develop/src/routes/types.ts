import React from 'react';

export type LazyComponent = React.LazyExoticComponent<React.ComponentType<any>>;

export default interface RouteType {
  path: string;
  exact: boolean;
  auth: boolean;
  component: LazyComponent;
  header?: LazyComponent;
  footer?: LazyComponent;
  advert?: LazyComponent;
}
