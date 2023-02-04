import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    // -------------------------------------------------------
    const logo = (
      <Box
        component="img"
        src="/assets/images/logonolabel.png"
        sx={{ width: 100, height: 100, cursor: disabledLink ? 'default' : 'pointer', ...sx }}
        {...other}
      />
    );

    if (disabledLink) return <>{logo}</>;

    return <RouterLink to={'/home'}>{logo}</RouterLink>;
  }
);

export default Logo;
