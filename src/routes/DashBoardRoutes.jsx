import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { Balance } from "../pages/Balance";
import { CreditCards } from "../pages/CreditCards";
import { Movements } from '../pages/Movements';

const getComponent = (component) => {
  switch (component) {
    case "Home":
      return <Home />;
    case "Movimientos":
      return <Movements />;
    case "Balance total":
      return <Balance />;
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
