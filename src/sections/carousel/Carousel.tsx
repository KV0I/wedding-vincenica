import { useEffect, useRef, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import Image from '../../components/image';
import Carousel, { CarouselArrows } from '../../components/carousel';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id?: string;
    image?: string;
  }[];
};

export default function CarouselSection({ data }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    fade: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const isMobile = useResponsive('down', 'md')

  return (
    <CarouselArrows onNext={handleNext} onPrevious={handlePrev}>
      <Box
        py={'20px'}
        width={'100vw'}
        maxWidth={'3000px'}
        maxHeight={'1920px'}
        margin={'auto'}
        alignItems="center"
        sx={!isMobile ? {
          width: '420px',
          height: '100%',
          position: 'relative',
          '& .slick-list': {
            boxShadow: theme.customShadows.z16,
          }
        } : {}}
      >
        <Box
          sx={{
            p: isMobile ? 0 : 5,
            width: isMobile ? '100vw' : '100%',
            minHeight: isMobile ? '0' : '530px',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            margin: isMobile ? 'auto' : 0,
          }}>
          <Carousel ref={carouselRef} {...carouselSettings}>

            {data.map((item) => (
              <CarouselItem key={item.id} item={item} />
            ))}
          </Carousel>
        </Box>
      </Box>
    </CarouselArrows >
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  id?: string,
  image?: string
};

function CarouselItem({ item }: { item: CarouselItemProps }) {
  const { image, id } = item;
  const isMobile = useResponsive('down', 'md')


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

  return <Image alt={id} src={image}
    sx={{
      margin: isMobile ? 'auto' : 0,
      width: isMobile ? (ratio > 1.5 ? '40vh' : '20vh') : '100%',
      height: isMobile ? '100%' : '100%',
    }}
  />;
}
