import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SideInfo from './SideInfo'
import Info from './Info'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sideBar: {
    backgroundColor: '#032074',
    height: 1020,
    width: 280,
    position: 'relative',
    left: 0,
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Grid container justify="center" direction="row" >
          <Grid item sm={2} spacing={20}>
            <div className={classes.sideBar}>
              <SideInfo />
            </div>

          </Grid>
          <Grid item sm={4}>
            <Info />
          </Grid>
        </Grid>
      </div>

    </div>
  );
}
