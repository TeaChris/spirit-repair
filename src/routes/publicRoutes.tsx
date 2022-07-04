/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

export const OpenRoutes: FunctionComponent<any> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ ...props }) => {
        return <Component {...props} />;
      }}
    />
  );
};
