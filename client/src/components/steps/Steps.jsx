import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Timeline } from '@material-ui/lab';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Steps() {
  const classes = useStyles();

  return (
    <div >
    <TimelineContent style={{marginRight :"500px",marginLeft :"500px",marginTop :"50px"}}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1"style={{marginLeft:"120px"}}>
            Our E-learning Process
            </Typography>
          </Paper>
        </TimelineContent>
    <Timeline align="alternate" style={{marginTop :"100px"}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <QuestionAnswerOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              QUIZZES/PROJECTS
            </Typography>
            <Typography>Get unlimited quizzes & projects</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              COURSES
            </Typography>
            <Typography>Get unlimited courses </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <BrandingWatermarkIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              LOGIN
            </Typography>
            <Typography>Already have an account</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <HowToRegIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              REGISTER
            </Typography>
            <Typography>Create an account</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}