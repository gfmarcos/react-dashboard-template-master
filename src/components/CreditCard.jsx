import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { creditCardsMapper } from '../data/creditCardsMapper';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  name: {
    fontSize: 20,
  },
  balance: {
    fontSize: 18,
    color: '#303F9F',
  },
  imgNumber: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    maxWidth: '40px',
  },
});

export const CreditCard = ({ bank, balance = 0, logo, name ,number }) => {
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <h1 className={classes.name}>{bank}</h1>
        <h2 className={classes.balance}>{`${balance} €`}</h2>
        <div className={classes.imgNumber}>
          <img src={logo} className={classes.logo} alt={name} />
          <div>{number}</div>
        </div>
      </CardContent>
    </Card>
  );
};
