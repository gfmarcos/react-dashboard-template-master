import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';
import { CreditCards } from '../pages/CreditCards';

const getComponent = (component) => {
  switch (component) {
    case "Home":
      return <Home />;
    case "Movimientos":
      return <Movements />;
    case "Settings":
      return <Settings />;
    case "Tarjetas":
      return <CreditCards />;
    default:
      return <Home />;
  }
};

export const DashBoardRoutes = ({ pathMain, pathSecondary }) => {
  const paths = [...pathMain, ...pathSecondary];
  return (
    <>
      <Switch>
        {paths.map(({ path, text }, index) => (
          <Route key={index} exact path={path}>
            {getComponent(text)}
          </Route>
        ))}
        <Redirect to="/home" />
      </Switch>
    </>
  );
};
