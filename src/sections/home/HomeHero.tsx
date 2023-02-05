import { m, MotionValue } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Box } from '@mui/material';
//
import { MotionContainer, varFade } from '../../components/animate';
import Logo from '../../components/logo';
// import Image from 'src/components/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const StyledRoot = styled(m.div)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '100vh',
  minHeight: 560,
  minWidth: '300px',
  overflow: 'hidden',
  scrollSnapAlign: 'start',
}));

const StyledHero = styled(m.div)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundImage: 'url(/assets/images/hero-background.png)',
  WebkitMaskBoxImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%)`,
  minHeight: 560,
  minWidth: '300px',
}));

const ContentDivider = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: '-2%',
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(2, 0),
  height: '30px',
  minWidth: '100%',
}));

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    bottom: 80,
  },
  minHeight: 560,
}));

// ----------------------------------------------------------------------

type Props = {
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;
};

export default function HomeHero({ scrollYProgress, y }: Props) {
  const isMobile = useResponsive('down', 'md');

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const ratio = width / height;

  // const [mounted, setMounted] = useState(false);

  // useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    const handleWindowResizeHeight = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleWindowResizeHeight);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('resize', handleWindowResizeHeight);
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);

  scrollYProgress.onChange((latest) => {
    setScrollY(latest / 0.5);
  });

  return (
    <>
      <StyledHero
        sx={{
          top: `${50 * scrollY}%`,
          backgroundPosition: `center ${65}%`,
          zIndex: -1,
        }}
      />
      <StyledRoot
        sx={{
          top: `${50 * scrollY}%`,
          backgroundPosition: `center ${65}%`,
        }}
      >
        <Container component={MotionContainer}>
          <StyledContent>
            <Stack
              paddingTop={3}
              alignItems="center"
              spacing={3}
              sx={{ color: 'common.black' }}
              justifyContent="start"
              minHeight={360}
              width="100%"
              height="80vh"
            >
              <m.div variants={varFade().in}>
                <Logo disabledLink />
              </m.div>
              <m.div variants={varFade().in}>
                <Stack
                  direction={isMobile ? 'column' : 'row'}
                  color="primary.main"
                  justifyContent="center"
                  alignItems={isMobile ? 'center' : 'center'}
                  spacing={isMobile ? 1 : 10}
                  // paddingRight={isMobile ? 0 : 15}
                  width={'100vw'}
                >
                  <Typography sx={{ width: isMobile ? '100%' : '550px' }} variant={isMobile ? 'h3' : 'h2'}>
                    Vincent John Deyro
                  </Typography>
                  <Typography variant="h5" fontSize={isMobile ? 15 : 30} letterSpacing={6}>
                    AND
                  </Typography>

                  <Typography sx={{ width: isMobile ? '100%' : '550px' }} variant={isMobile ? 'h3' : 'h2'}>
                    Danica Lutovac
                  </Typography>
                </Stack>
              </m.div>

              <Box
                position={'absolute'}
                bottom={0}
                maxWidth={'100vw'}
                width="100vw"
                height="80vh"
                minWidth={ratio < 0.5 ? '40vh' : 300}
                minHeight={560}
              >
                {/* <m.div style={mounted ? { y: y } : {}}> */}
                <LazyLoadImage
                  src="/assets/images/couple.png"
                  alt="hero"
                  style={{
                    width: width >= height ? width / 2 : height / 2,
                    minWidth: ratio < 0.5 ? '40vh' : 360,
                    maxWidth: ratio > 1.5 ? '75vh' : undefined,
                    // width: ((width - 200) * 1000) / width + 500,
                    // maxWidth: width>2000? '100vh': width,
                    top: '60%',
                    position: 'fixed',
                    bottom: `calc((20% * ${scrollY}) - 5%)`,
                    // bottom: 0,
                    right: 0,
                    left: 0,
                    margin: 'auto',
                  }}
                />
                {/* </m.div> */}
                {/* <Image
                position={'absolute'}
                paddingTop={10}
                bottom={0}
                
                src="/assets/images/couple.png"
                alt="hero"
                sx={{ width: '100%', height: '100%', position: 'absolute', bottom: 0 }}
              /> */}
              </Box>
            </Stack>
          </StyledContent>
        </Container>
        <ContentDivider />
      </StyledRoot>
    </>
  );
}

// ----------------------------------------------------------------------
