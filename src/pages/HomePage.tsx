// import "./snap.css"

import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScroll, useTransform } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
// sections
import { HomeHero, PleaseRespond, Venue, DressCode } from '../sections/home';
import LoadingScreen from '../components/loading-screen';
import DressDialog from 'src/sections/home/DressDialog';
import { makeStyles } from '@mui/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles({
  container: {
    zIndex: 99,
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'scroll',
    scrollSnapType: 'y mandatory',
    scrollBehavior: 'smooth',
    webkitOverflowScrolling: 'touch',
    scrollMargin: '500px'
  },
});

export default function HomePage() {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: sectionRef
  })

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialized(true);
    }, 3400);
  }, []);


  const classes = useStyles();

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResizeHeight = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleWindowResizeHeight);

    return () => {
      window.removeEventListener('resize', handleWindowResizeHeight);
    };
  }, []);

  const y = (useTransform(scrollYProgress, [0, 0.25], [height * 0.9, height / 1.5]));



  return (
    <>
      <Helmet>
        <title>Vincent and Danica</title>
        <style>{'body { background-color: #F0E3DA; }'}</style>
      </Helmet>

      <HomeHero scrollYProgress={scrollYProgress} y={y} />

      <DressDialog />

      <Box
        ref={sectionRef}
        className={classes.container}
      >

        <Box visibility={'hidden'} zIndex={-1} height='100vh' sx={{ scrollSnapAlign: 'center' }} />

        <DressCode />

        <Venue />

        <PleaseRespond />

      </Box>
      {!isInitialized && <LoadingScreen />}
    </>
  );
}

// ----------------------------------------------------------------------

