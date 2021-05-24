import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => {
  return {
    fixedHeight: {
      height: 240,
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      padding: theme.spacing(2),
    },
  };
});

export const Home = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid item xs={12} md={4} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Typography>Primera caja</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Typography>Segunda caja</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <Typography>Tercera caja</Typography>
        </Paper>
      </Grid>
    </>
  );
};
