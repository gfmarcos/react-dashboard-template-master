import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { creditCardsMapper } from '../data/creditCardsMapper';
import { CreditCard } from '../components/CreditCard';

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: '2rem',
      width: '100%',
    },
    titleH1: {
      marginBottom: '20px',
    },
    creditFlex: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      '& > div': {
        flexBasis: '32%',
        marginBottom: '20px',
      },
    },
  };
});

export const CreditCards = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h1" className={classes.titleH1}>
        Tarjetas
      </Typography>
      <div className={classes.creditFlex}>
        {creditCardsMapper().map((creditCard) => (
          <CreditCard key={creditCard.id} {...creditCard} complete={true} />
        ))}
      </div>
    </Paper>
  );
};
