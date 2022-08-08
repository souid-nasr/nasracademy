import React from 'react';
import './landing.scss'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../../components/landing/Header';
import Orientation from '../../components/landing/Orientation';
import useWindowPosition from '../../components/landing/useWindowPosition'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: '/blogging-336376.jpg',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function Landing() {
  const classes = useStyles();
  const checked = useWindowPosition('header')
  return (
    <div className='landing'>
      <CssBaseline />
      <Header />
      <Orientation checked={checked}/>
    </div>
  );
}