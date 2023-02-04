import { useState } from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
// @mui
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, styled, Typography } from '@mui/material';
// components
import { MotionContainer, varFade } from '../components/animate';
import Iconify from 'src/components/iconify/Iconify';
// // assets
import { invitations } from 'src/config';

// ----------------------------------------------------------------------


/* list of pages 
- Invitation
○ Susana Lutovac & Drasko Lutovac
○ Mary Jane Deyro & Jesus Agana
○ Carolina Apostol Takagi
○ Maria Lourdes Brondial-Aureada
○ Diosdado Macapagal Jr.
○ Col. Inocencio Silbol
○ Sandra Lutovac
○ Stefanie Lutovac
○ Jomarie Apostol
○ Maria Griselda Deyro
○ Ellyssa May Lachica
○ Reychelle Moscoso-Go
○ Jayceed Saymond Deyro
○ Mark Jayson Tingzon
○ Earl Vic Hurna
○ Dominic Bermudez
- Main Page
○ Hero
○ Dress Code
○ The Venue
○ RAVP  
*/

export default function PageList() {

  const StyledListContainer = styled(Paper)(({ theme }) => ({
    width: '100%',
    border: `solid 1px ${theme.palette.divider}`,
  }));
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();



  return (
    <>
      <Helmet>
        <title> Page List | Vincent and Danica</title>
      </Helmet>


      <MotionContainer>
        <Typography variant="h3" paragraph>
          Page List
        </Typography>


        <StyledListContainer>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <m.div variants={varFade().in}>
                <ListSubheader component="div" id="nested-list-subheader">
                  Links
                </ListSubheader>
              </m.div>
            }
          >
            <m.div variants={varFade().in}>
              <ListItemButton onClick={() => navigate('/home')}>
                <ListItemIcon>
                  <Iconify icon="ph:presentation-fill" width={24} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Iconify icon="ic:round-drafts" width={24} />
                </ListItemIcon>
                <ListItemText primary="Invitations" />
                {open ? (
                  <Iconify icon="ic:round-expand-less" width={24} />
                ) : (
                  <Iconify icon="ic:round-expand-more" width={24} />
                )}
              </ListItemButton>
              <Collapse in={open} unmountOnExit>
                <List component="div" disablePadding>
                  {invitations.map((invitee) => (
                    <ListItemButton sx={{ pl: 4 }} key={invitee[1]} onClick={() => navigate(`/${invitee[1]}`)}>
                      <ListItemIcon>
                        <Iconify icon="ic:round-star-border" width={24} />
                      </ListItemIcon>
                      <ListItemText primary={invitee[0]} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </m.div>
          </List>
        </StyledListContainer>
      </MotionContainer>
    </>
  );
}
