// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Container, Typography, StackProps } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport } from '../../components/animate';
import useResponsive from 'src/hooks/useResponsive';
import { useEffect, useState } from 'react';
import { useDressDialog } from '../../components/dialog/DialogProvider';
import CarouselSection from '../carousel/Carousel';

// ----------------------------------------------------------------------

const palette = [
  {
    color: '#E5BA91'
  },
  {
    color: '#73754A'
  },
  {
    color: '#AEC3BC'
  },
  {
    color: '#B27951'
  },
  {
    color: '#F2D2C3'
  },
  {
    color: '#989872'
  },
  {
    color: '#F5D9BC'
  },
  {
    color: '#DD9E83'
  },
];

const lsrc = '/assets/images/ladies';
const gsrc = '/assets/images/gents';

const ladiesDress = [...Array(10)].map((_, i) => ({
  id: `${i + 1}`,
  image: `${lsrc}/${i + 1}.png`
}));
const gentsDress = [...Array(5)].map((_, i) => ({
  id: `${i + 1}`,
  image: `${gsrc}/${i + 1}.png`
}))


// ----------------------------------------------------------------------

export default function DressCode() {
  const isMobile = useResponsive('down', 'md');

  const { setOpen, pictures, setPictures } = useDressDialog();

  useEffect(() => {
    if (pictures.length === 0) setOpen(false);
    else setOpen(true);

  }, [pictures, setOpen, setPictures]);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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

  const ratio = width / height;

  // ----------------------------------------------------------------------

  const StyledRoot = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(7),
    textAlign: 'center',
    height: '100vh',
    position: 'relative',
    minHeight: isMobile ? '667px' : '649px',
    maxHeight: '1920px',
    minWidth: '300px',
    borderBlockEnd: '1px solid #DDD',
    scrollSnapAlign: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
  }));

  const ContentDivider = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    top: -15,
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(2, 0),
    height: '30px',
    minWidth: '100%',
  }));

  const dressSectionStyle = {
    p: isMobile ? 0 : 5,
    minWidth: '300px',
    width: isMobile ? '100%' : '40vw',
    minHeight: isMobile ? '200px' : '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    display: 'flex',
  };

  const imageStyle = {
    padding: isMobile ? 0 : '10%',
    width: isMobile ? (ratio > 1.5 ? '40vh' : '20vh') : ratio > 1.5 ? '60vh' : '55vh',
    minWidth: isMobile ? '200px' : '100%',
    height: isMobile ? '100%' : '100%',
    minHeight: isMobile ? '300px' : '100%',
    objectFit: 'fit',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 0.5s ease',
    },
  };


  return (
    <StyledRoot>
      <ContentDivider />
      <Container component={MotionViewport}>
        <Stack position='absolute' alignSelf='center' width='100vw' sx={{
          left: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          maxHeight: '1920px',
          minHeight: isMobile ? '840px' : '649px',
          minWidth: '300px',
        }}>
          <Typography variant={isMobile ? 'h3' : 'h2'} sx={{ mb: '2vh' }}>
            Dress Code
          </Typography>
          <Content isMobile={isMobile} />

        </Stack>
        <Stack
          width='100%'
          pt={isMobile ? '6rem' : 0}
          minWidth={'300px'}
          height={isMobile ? '90vh' : '100vh'}
          maxHeight={'1920px'}
          direction={isMobile ? 'column' : 'row'}
          margin={'auto'}
          alignItems="space-evenly"
        >
          <Box
            sx={dressSectionStyle}
          >
            {!isMobile ?
              (
                <>
                  {/* Ladies */}
                  <Image src="/assets/images/ladies.png" alt="dresscode" sx={imageStyle}
                    onClick={() => setPictures(ladiesDress)}
                  />
                  {/* <Typography variant="h4" sx={textStyle} color={'#554839'}>
                    LADIES
                  </Typography> */}
                </>
              )
              :
              <Box sx={{ px: isMobile ? 0 : 10, backgroundColor: 'primary.light' }}>
                <CarouselSection data={ladiesDress} />
              </Box>
            }
          </Box>

          <Box
            sx={dressSectionStyle}
          >

            {!isMobile ?
              (
                <>
                  {/* Gents */}
                  <Image src="/assets/images/gentle-man.png" alt="dresscode" sx={imageStyle}
                    onClick={() => setPictures(gentsDress)}
                  />
                  {/* <Typography variant="h4" sx={textStyle} color={'#785647'}>
              GENTLE MAN
            </Typography> */}
                </>
              )
              :
              <Box sx={{ px: isMobile ? 0 : 10, backgroundColor: 'primary.light' }}>
                <CarouselSection data={gentsDress} />
              </Box>
            }
          </Box>
        </Stack>
      </Container>
    </StyledRoot >
  );
}

// ----------------------------------------------------------------------

function Content({ isMobile }: { isMobile: boolean }) {
  const solutionList = (
    <Stack height={'80vh'} alignItems={'center'} justifyContent={isMobile ? 'start' : 'center'} >
      <Stack maxWidth='100vw' direction={isMobile ? 'row' : 'column'} height={isMobile ? 'auto' : '80vh'} alignSelf='center' maxHeight='800px'>
        {palette.map((palette) => (
          <DressPalette
            key={palette.color}
            palette={palette}
          />
        ))}
      </Stack>
    </Stack>
  );

  return <>{solutionList}</>;
}

// ----------------------------------------------------------------------

interface DressPaletteProps extends StackProps {
  palette: {
    color: string;
  }
}

function DressPalette({ palette, sx, ...other }: DressPaletteProps) {
  const { color } = palette;

  return (
    <Stack
      sx={{
        margin: 'auto',
        alignItems: 'center',
      }}
      {...other}
    >
      <Stack spacing={2}>
        <Box width={{ xs: 40, sm: 45, md: 50 }} sx={{ position: 'relative' }}>
          <Box
            sx={{
              borderRadius: '50%',
              width: { md: 50, sm: 40, xs: 35 },
              height: { md: 50, sm: 40, xs: 35 },
              bgcolor: color,
              alignSelf: 'center',
              justifySelf: 'center',
              position: 'absolute',
            }}
          />
        </Box>
      </Stack>
      <Box
        sx={{
          height: { md: 60, sm: 60, xs: 40 },
          width: { md: 60, sm: 60, xs: 40 },
        }}
      />
    </Stack>
  );
}
