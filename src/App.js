import React, { useState, useEffect } from 'react';

import './App.css';

import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    sessionStorage.getItem('logged') ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  const handleLoggedIn = (logged) => {
    sessionStorage.setItem('logged', JSON.stringify(logged));
    setLoggedIn(logged);
  };

  const handleLoggedOut = (logged) => {
    sessionStorage.removeItem('logged');
    setLoggedIn(logged);
  };

  return <AppRoutes logged={loggedIn} handleLoggedIn={handleLoggedIn} handleLoggedOut={handleLoggedOut}/>;
};
