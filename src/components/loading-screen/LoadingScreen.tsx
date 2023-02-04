import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
//
import Logo from '../logo';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 9998,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
}));

// ----------------------------------------------------------------------

export default function LoadingScreen() {
  return (
    <>
      <StyledRoot>
        <m.div
          initial={{ y: 'calc(0)' }}
          animate={{
            opacity: [1, 1, 1, 0, 0],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeatDelay: 2,
            // repeat: Infinity,
          }}
        >
          <Box sx={{ position: 'fixed', left: 0, width: '100vw', height: '100vh' }} bgcolor='primary.light' />
        </m.div>
        <m.div
          initial={{ y: 'calc(0)' }}
          animate={{
            y: ['calc(50%)', 'calc(4%)', 'calc(2%)'],
            scale: [1, 0.6, 0.9, 1, 1],
            opacity: [1, .20, 0],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeatDelay: 1,
            // repeat: Infinity,
          }}
        >
          <Logo disabledLink sx={{ width: 96, height: 96 }} />
        </m.div>
      </StyledRoot>
    </>
  );
}
