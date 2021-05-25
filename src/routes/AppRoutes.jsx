import React from 'react';
import Login from '../pages/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DashBoard } from '../pages/DashBoard';
import Register from "../pages/Register";

export const AppRoutes = ({ logged, handleLoggedIn, handleLoggedOut, handleRegister }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {logged ? <Redirect to="home" /> : <Login handleLoggedIn={handleLoggedIn} />}
        </Route>
        <Route exact path="/login">
          {logged ? <Redirect to="home" /> : <Login handleLoggedIn={handleLoggedIn} />}
        </Route>
        <Route exact path="/home">
          {!logged ? <Redirect to="/" /> : <DashBoard handleLoggedOut={handleLoggedOut} />}
        </Route>
        <Route exact path="/register">
          {logged ? <Redirect to="home" /> : <Register handleRegister={handleRegister} />}
        </Route>
        <Route path="/">{!logged ? <Redirect to="/" /> : <DashBoard handleLoggedOut={handleLoggedOut} />}</Route>
      </Switch>
    </Router>
  );
};
