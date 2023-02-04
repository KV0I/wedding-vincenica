// @mui
import { Dialog, DialogContent } from '@mui/material';
import { useEffect } from 'react';
import useResponsive from 'src/hooks/useResponsive';
import { useDressDialog } from '../../components/dialog/DialogProvider';
import CarouselSection from '../carousel/Carousel';

// ----------------------------------------------------------------------

export default function DressDialog() {
  const { open, setOpen, pictures, setPictures } = useDressDialog();

  const isMobile = useResponsive('down', 'md');

  useEffect(() => {
    if (isMobile && open) {
      setOpen(false)
      setPictures([]);
    }
  }, [isMobile, setOpen, open, setPictures]);

  const handleClose = () => {
    setOpen(false);
    setPictures([]);
  };

  return (
    <Dialog open={open} onClose={handleClose} hideBackdrop sx={{ borderRadius: 0 }}>
      <DialogContent sx={{ px: 10, backgroundColor: 'primary.light' }}>
        <CarouselSection data={pictures} />
      </DialogContent>
    </Dialog>
  );
}
