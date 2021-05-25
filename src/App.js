import React, { useState, useEffect } from 'react';

import './App.css';

import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    sessionStorage.getItem('logged') ? setLoggedIn(true) : setLoggedIn(false);
  }, []);
  useEffect(() => {
    sessionStorage.getItem('user') ? setUser(user) : setUser(user);
  }, [user]);

  const handleLoggedIn = (logged) => {
    sessionStorage.setItem('logged', JSON.stringify(logged));
    setLoggedIn(logged);
  };

  const handleLoggedOut = (logged) => {
    sessionStorage.removeItem('logged');
    setLoggedIn(logged);
  };

  const handleRegister = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  return <AppRoutes logged={loggedIn} handleLoggedIn={handleLoggedIn} handleLoggedOut={handleLoggedOut} handleRegister={handleRegister} />;
};
