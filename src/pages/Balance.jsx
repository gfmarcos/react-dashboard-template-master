import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import { Balances } from '../components/Balances';

const useStyles = makeStyles((theme) => {
    return {
      paper: {
        padding: '2rem',
        width: '100%',
      },
      titleH1: {
        marginBottom: '20px',
      },
    };
  });

export const Balance = () => {
    const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      
      <div >
        <Balances complete={true} />
      </div>
    </Paper>
  );
};
