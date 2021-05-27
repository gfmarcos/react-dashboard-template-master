import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { creditCardsMapper } from '../data/creditCardsMapper';
import pink from '@material-ui/core/colors/pink';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 275,
    },
    name: {
      fontSize: '1.3rem',
    },
    balance: {
      fontSize: '1.2rem',
      color: pink[500],
    },
    imgNumber: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logo: {
      width: '40px',
    },
    number: {
      color: pink[500],
      padding: 0,
      margin: 0,
      fontSize: '.9rem',
    },
  };
});

export const CreditCard = ({ bank, balance = 0, logo, name, number }) => {
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <h1 className={classes.name}>{bank}</h1>
        <h2 className={classes.balance}>{`${balance} €`}</h2>
        <div className={classes.imgNumber}>
          <div><img src={logo} className={classes.logo} alt={name} />
          </div>
          <h3 className={classes.number}>{number}</h3>
        </div>
      </CardContent>
    </Card>
  );
};
