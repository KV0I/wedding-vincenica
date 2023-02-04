import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
// @mui
import { Typography } from '@mui/material';
// components
import { MotionContainer, varBounce } from '../components/animate';
// // assets

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | Vincent and Danica UI</title>
      </Helmet>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" p={10} textAlign='center'>
            Sorry, page not found!
          </Typography>
        </m.div>

      </MotionContainer>
    </>
  );
}
