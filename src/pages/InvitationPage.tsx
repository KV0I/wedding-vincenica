import { Box, Divider, Stack, styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Image from 'src/components/image/Image';
import useResponsive from 'src/hooks/useResponsive';
import { Invitation } from 'src/sections/invitation-page/Invitation';

export default function InvitationPage({ name }: { name: string }) {
  const isMobile = useResponsive('down', 'md');

  const StyledRoot = styled('div')(() => ({
    position: 'relative',
    backgroundPosition: 'center',
    minWidth: '340px',
    minHeight: '100vh',
    height: '100%',
  }));

  const StyledContent = styled('div')(() => ({
    textAlign: 'center',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  return (
    <>
      <Helmet>
        <title>Invitation for {name}</title>
      </Helmet>

      <StyledRoot>
        <StyledContent>
          <Stack
            minHeight={'100vh'}
            sx={{ flexWrap: 'wrap', height: '100%', width: '100%', bgcolor: 'primary.light' }}
            padding={2}
            alignSelf={'center'}
            width={'100vw'}
            spacing={7}
            justifyContent="center"
            direction={isMobile ? 'column' : 'row'}
            divider={
              <Divider
                orientation={isMobile ? 'horizontal' : 'vertical'}
                variant="middle"
                flexItem
              />
            }
            alignItems="center"
          >
            <Stack
              bgcolor="primary.light"
              width={isMobile ? '100%' : '50%'}
              alignItems="center"
              spacing={3}
              justifyContent="center"
            >
              <Box
                sx={{
                  height: isMobile ? 200 : 300,
                  width: isMobile ? 200 : 300,
                }}
              >
                <Image alt="illustration_dashboard" src="/assets/images/logo.png" />
              </Box>

              <Stack spacing={5}>
                <Stack alignItems="center" spacing={3}>
                  <Typography variant="subtitle1" color="primary.main" sx={{ fontStyle: 'italic' }}>
                    together with their families
                  </Typography>

                  <Typography variant="body1" color="black" align="center" letterSpacing={2}>
                    INVITE YOU TO JOIN THEM IN CELEBRATION
                    <br />
                    AS THEY UNITE IN MATRIMONY
                  </Typography>
                </Stack>

                <Stack alignItems="center">
                  <Typography
                    variant="subtitle2"
                    align="center"
                    color="black"
                    fontSize={30}
                    sx={{ fontStyle: 'italic' }}
                  >
                    24 February 2023, Saturday
                  </Typography>

                  <Typography variant="body1" color="black" letterSpacing={2}>
                    four o'clock in the afternoon
                  </Typography>
                </Stack>

                <Stack alignItems="center">
                  <Typography variant="h5" color="black" letterSpacing={3}>
                    OCEAN PAVILION
                  </Typography>

                  <Typography variant="body1" noWrap color="black" letterSpacing={2}>
                    SHANGRI-LA'S MACTAN {isMobile ? <br /> : ''}RESORT & SPA
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              paddingTop={isMobile ? 0 : 10}
              alignItems="center"
              spacing={7}
              justifyContent="center"
            >
              <Invitation />

              <Typography
                variant="overline"
                sx={{
                  textAlign: 'center',
                  letterSpacing: 2,
                  paddingBottom: isMobile ? 7 : 0,
                }}
              >
                {name}
              </Typography>
            </Stack>
          </Stack>
        </StyledContent>
      </StyledRoot>
    </>
  );
}
