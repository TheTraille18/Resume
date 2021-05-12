import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 9,
    width: 230,
    borderRadius: 0,
  },

  colorPrimary: {
    backgroundColor: '#32559c',
  },
  bar: {
    borderRadius: 0,
    backgroundColor: 'white',
  },
}))(LinearProgress);
const useStyles = makeStyles({
  progressBar: {
    position: 'relative',
    left: '10px',
  },
})

export default function Skill(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" spacing={1} align="left">
        <Grid item>
          {props.name}
        </Grid>
        <Grid item className={classes.progressBar}>
          <BorderLinearProgress variant="determinate" value={props.level} />
          <div><br /></div>
        </Grid>
      </Grid>
    </div>
  )
}