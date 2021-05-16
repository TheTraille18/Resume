import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function Info() {
  return (
    <div>
      <p align="left">
        <b>OBJECTIVE: </b>Experienced Staff Systems Engineer with experience in <br />
        multiple programing languages and AWS certified seeking a <br />
        position in either Frontend, Backend development or AWS Cloud engineer.
      </p>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <h3>Work History</h3>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item sm={2} align="left">
              2015-11<br />
              Current<br />
            </Grid>
            <Grid item sm={10} align="left">
              <b>Staff System Engineer</b><br />
              Kapsch TrafficCom, Duluth, GA<br />
              As a system engineer, created configuration for a Java based Supervisory Control and Data Acquisition (SCADA) application for traffic management. Tasks included<br />
              o Deploying updates on live Traffic management systems through Linux<br />
              o Used programming languages such as Java, Python and Go to create tools for converting customer configuration into configuration for our proprietary software<br />
              o Managed multiple configurations in both Production, Test, Staging and Development environments using SVN
            </Grid>
          </Grid>
        </Grid>
        <span></span>
        <Grid item>
          <Grid container direction="row">
            <Grid item sm={2} align="left">
              2012-03 -<br />
              2015-08<br />
            </Grid>
            <Grid item sm={10} align="left">
              <b>Control System Engineer</b><br />
              Logical System Inc, LSI<br />
              Siemens Programmable Logic Controller (PLC)<br />
              Handling machinery upgrades onsite<br />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <h3>Education</h3>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item sm={2} align="left">
              2007-8<br />
              2011-5<br />
            </Grid>
            <Grid item sm={10} align="left">
              <b>Bachelor of Science: Mechatronics Engineering (Mechanical, Electrical and Computer Science)</b><br />
              Southern Polytechnic State University - Marietta, GA
              Graduated cum laude
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <h3>Projects</h3>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" >
            <Grid item sm={6} align="left">
              <div>
                <b>Website</b><br />
                <a href="https://ablackcloudapp.com/">https://ablackcloudapp.com/</a><br />
                    Website created using React hosted<br />
                    on AWS S3<br />
                    Authentication using AWS Cognito<br />
                    AWS Cloudfront for CDN
              </div>
            </Grid>
            <Grid item sm={6} align="left">
              <div>
                <b>Resume Website</b><br />
                <a href="https://resume.ablackcloudapp.com/">https://resume.ablackcloudapp.com</a><br />
                Created using React hosted on AWS S3<br />
                CICD using Jenkins and AWS CloudBuild
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item sm={10} align="left">
              <b>Task Manager App</b><br />
                    https://ablackcloudapp.com/taskmanagerapp<br />
                    CICD through AWS CodeBuild<br />
                    Serverless Architecture using AWS Lambda<br />
                    infrastructure as code using Cloudformation<br />
                    GraphQL Through AWS Appsync using Go and Node Lambda
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <h3>Certifications</h3>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" >
            <Grid item xs={2}>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={1} >
                <Grid item align="left">
                  AWS Solutions Architect Associate
                </Grid>
                <Grid item align="left">
                  AWS Developer Associate
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}