// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Typography } from '@mui/material';
// components
import Image from 'src/components/image';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(2, 0),
  minWidth: '300px',
  minHeight: 560,
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  scrollSnapAlign: 'start',
  maxHeight: '1920px',
}));

// ----------------------------------------------------------------------

export default function PleaseRespond() {
  const isMobile = useResponsive('down', 'md');
  return (
    <StyledRoot >
      <Box
        bgcolor='primary.light'
        width={isMobile ? '80vw' : '40vw'}
        minWidth={isMobile ? '300px' : '700px'}
        minHeight={450}
        maxHeight='100vh'
        height='600px'
        padding={10}
        border={'1px solid #A64646'}
        boxShadow={'0px 10px 30px 20px rgba(0,0,0,0.5)'}
        display='flex'
        textAlign='center'
        flexDirection='column'
        justifyContent='space-evenly'
      >
        <Typography variant='h2' color='common.black' fontWeight={4}>
          RSVP
        </Typography>

        <Stack fontStyle={'italic'}>
          <Typography variant='h5' color='common.black' fontWeight={2}>
            PLEASE ANSWER FORM BY CLICKING
          </Typography>
          <Button variant='text' size='medium' sx={{ fontSize: '1.3rem', fontStyle: 'italic' }}
            onClick={() => window.open('https://forms.gle/hqPg4i3fbkVdT3n56', '_blank')}
          >
            HERE
          </Button>

        </Stack>

        {!isMobile &&
          <>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image sx={{ mixBlendMode: 'darken' }} src='/assets/images/qr.png' alt='qr'
                width={'100%'} height={'100%'}
              />
            </Box>

            <Typography variant='h5' color='common.black' fontWeight={2}>
              OR SCAN QR CODE TO ACCESS FORM
            </Typography>
          </>
        }
      </Box>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

