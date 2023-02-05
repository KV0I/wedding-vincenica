// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack, Divider } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport } from '../../components/animate';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export default function HomeMission() {
  const isMobile = useResponsive('down', 'md');

  const StyledRoot = styled('div')(({ theme }) => ({
    height: '100vh',
    minHeight: isMobile ? '667px' : '649px',
    maxHeight: '1920px',
    scrollSnapAlign: 'center',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    borderTop: `2px solid ${theme.palette.divider}`,
  }));

  return (
    <StyledRoot>
      <Container sx={{ height: 'inherit', minHeight: 'inherit' }} component={MotionViewport}>
        <Stack
          textAlign={isMobile ? 'center' : 'left'}
          justifyContent={'space-evenly'}
          minHeight="inherit"
          height="inherit"
          maxHeight="1920px"
          divider={isMobile && <Divider orientation={'horizontal'} variant="middle" flexItem />}
        >
          <Stack
            direction={isMobile ? { xs: 'column-reverse', sm: 'row' } : 'row'}
            minHeight="300px"
            maxHeight="50vh"
            spacing={'1rem'}
            divider={<Divider orientation={'vertical'} variant="middle" flexItem />}
          >
            <Stack
              flex={1}
              pt={2}
              alignItems="center"
              justifyContent={'space-evenly'}
              maxHeight="200px"
              minWidth={isMobile ? 200 : 360}
            >
              <Typography variant={isMobile ? 'h3' : 'h2'} sx={{ my: isMobile ? 2 : 5 }}>
                The Venue
              </Typography>
              <Typography variant={isMobile ? 'h6' : 'h4'}>OCEAN PAVILION</Typography>
              <Typography variant="subtitle1" fontSize={isMobile ? '0.8rem' : '1rem'} sx={{ mb: 3 }}>
                SHANGRI-LA'S MACTAN RESORT & SPA
              </Typography>
            </Stack>
            <Image
              src="/assets/images/venue.png"
              alt="venue"
              flex={1}
              height="100%"
              sx={{ width: isMobile ? { xs: '300px', sm: '360px' } : '560px', alignSelf: 'center' }}
            />
          </Stack>

          <Box
            sx={{
              position: 'relative',
              borderRadius: '50px',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              justifyItems: 'center',
              overflow: 'hidden',
              height: isMobile ? '300px' : '500px',
              maxHeight: isMobile ? 'F' : '50vh',
              pointerEvents: 'auto',
            }}
          >
            <Box
              sx={{
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                zIndex: 1,
              }}
            />
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4192823969024!2d124.0178585149604!3d10.308290592640239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9971df5961433%3A0x4519b36d1503dae2!2sLobby%20Lounge%20at%20Shangri-La&#39;s%20Mactan%20Resort%20and%20Spa%20-%20Cebu!5e0!3m2!1sen!2sjp!4v1672630468697!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Box>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
