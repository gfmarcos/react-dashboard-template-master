import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Cart } from '../pages/Cart';
import { Contacts } from '../pages/Contacts';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';

const getComponent = (component) => {
  switch (component) {
    case 'Home':
      return <Home />;
    case 'Cart':
      return <Cart />;
    case 'Contacts':
      return <Contacts />;
    case 'Settings':
      return <Settings />;
    default:
      return <Home />;
  }
};

export const DashBoardRoutes = ({ pathMain, pathSecondary }) => {
  const paths = [...pathMain, ...pathSecondary];
  console.log(paths);
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
