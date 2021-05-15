import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Skill from './Skill'


const useStyles = makeStyles({
  root: {
    color: 'white',
  },
  progressBar: {
    position: 'relative',
    left: '40px',
  },
  header: {
    backgroundColor: '#002162',
  },
  fonttest: {
    fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
    fontSize: 50
  },
  sideBarTextMargin: {
    position: 'relative',
    left: "25px",
  }
})

export default function SideInfo() {
  const skills = [
    {
      name: "Java",
      level: 60,
    },
    {
      name: "Go",
      level: 40,
    },
    {
      name: "Python",
      level: 30,
    },
    {
      name: "Node",
      level: 20,
    },
    {
      name: "React",
      level: 50,
    },
    {
      name: "AWS (Certified)",
      level: 80,
    },
    {
      name: "GIT",
      level: 35
    },
    {
      name: "Data Structures & Algorithms",
      level: 40,
    },
    {
      name: "Docker",
      level: 30,
    },
    {
      name: "Kubernates",
      level: 10,
    },
  ]
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={2} align="left">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <div className={classes.sideBarTextMargin}>
              <div className={classes.fonttest}>Justin<br /> Traille</div>
            </div>

          </Grid>
          <Grid item>
            <div className={classes.sideBarTextMargin}>
              <div>Staff System Engineer</div>
            </div>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.header}>
              <div className={classes.sideBarTextMargin}>
                <b>Contact</b>
              </div>
            </Grid>
            <Grid container direction="column">
              <div className={classes.sideBarTextMargin}>

                <Grid item align="left">
                  <b>Address</b><br />
                  Duluth, GA, 30096
                </Grid>
                <div><br /></div>
                <Grid item align="left">
                  <b>Phone</b><br />
                  404-561-8686
                </Grid>
                <div><br /></div>
                <Grid item align="left">
                  <b>E-mail</b><br />
                  Jtraille07@gmail.com
                </Grid>
              </div>
            </Grid>

          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.header}>
              <div className={classes.sideBarTextMargin}>
                <b>Skills</b>
              </div>
            </Grid>
            <div><br /></div>
            <Grid item>
              <div className={classes.sideBarTextMargin}>
                {skills.map(skill => (
                  <Skill name={skill.name} level={skill.level} />
                ))}
                <div><br /></div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}