import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { creditCardsMapper } from '../data/creditCardsMapper';
import pink from '@material-ui/core/colors/pink';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: '100%',
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
    numberMask: {
      color: pink[500],
      padding: 0,
      margin: 0,
      fontSize: '.9rem',
    },
    number: {
      padding: 0,
      marginBottom: '.5em',
      fontSize: '1rem',
    },
    monthYear: {
      '& > span': {
        fontSize: '.6rem',
        textTransform: 'uppercase',
      },
    },
    userName: {
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    code: {
      backgroundColor: '#FFF9C4',
      padding: '.3rem',
      textAlign: 'right',
      marginBottom: '1rem',
    },
    bankLogo: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    balanceComplete: {
      color: pink[500],
      fontSize: '1.2rem',
      textAlign: 'right',
      margin: 0,
    },
  };
});

export const CreditCard = ({ bank, balance = 0, logo, name, number, numberMask, month, year, userName, code, complete }) => {
  const classes = useStyles();
  return !complete ? (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <h1 className={classes.name}>{bank}</h1>
        <h2 className={classes.balance}>{`${balance} €`}</h2>
        <div className={classes.imgNumber}>
          <div>
            <img src={logo} className={classes.logo} alt={name} />
          </div>
          <h3 className={classes.numberMask}>{numberMask}</h3>
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <div className={classes.bankLogo}>
          <h1 className={classes.name}>{bank}</h1>
          <div>
            <img src={logo} className={classes.logo} alt={name} />
          </div>
        </div>
        <h3 className={classes.number}>{number}</h3>
        <span className={classes.monthYear}>
          <span> Hasta / Final:</span> {`${month}/${year}`}
        </span>
        <h4 className={classes.userName}>{userName}</h4>
        <div className={classes.code}>{code}</div>
        <h2 className={classes.balanceComplete}>{`${balance} €`}</h2>
      </CardContent>
    </Card>
  );
};
