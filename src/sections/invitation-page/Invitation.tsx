import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Link, Typography } from "@mui/material"
import { makeStyles, createStyles } from "@mui/styles";


export function Invitation({ ...other }) {


    const useStyles = makeStyles(() =>
        createStyles({
            body: {
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'sans-serif',
            },
            wrapper: {
                height: 200,
                width: 300,
                backgroundColor: '#BAA78E',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 0,
                backgroundImage: `url(/assets/images/brownpaper.jpg)`,
            },
            lid: {
                position: 'absolute',
                height: '100%',
                width: '100%',
                top: 0,
                left: 0,
                borderRight: '150px solid transparent',
                borderBottom: '100px solid transparent',
                borderLeft: '150px solid transparent',
                transformOrigin: 'top',
                transition: 'transform 0.25s linear',
            },
            lidOne: {
                borderTop: '100px solid rgba(191, 157, 125, 1)',
                transform: 'rotateX(0deg)',
                zIndex: 3,
                transitionDelay: '0.75s',
            },
            lidTwo: {
                borderTop: '100px solid rgba(191, 157, 125, 1)',
                transform: 'rotateX(90deg)',
                zIndex: 1,
                transitionDelay: '0.5s',
            },
            envelope: {
                position: 'absolute',
                height: '100%',
                width: '100%',
                top: 0,
                left: 0,
                borderTop: '100px solid transparent',
                borderRight: '150px solid rgba(189, 161, 134, 1);',
                borderBottom: '100px solid #BDA186',
                borderLeft: '150px solid #BAA78E',
                filter: 'url(#noise)',
                zIndex: 3,
            },
            letter: {
                position: 'absolute',
                top: 0,
                width: '80%',
                height: '80%',
                backgroundImage: 'linear-gradient(to bottom, #CEA583, #F0E3DA)',
                borderRadius: 15,
                border: '1px solid #BAA78E',
                zIndex: 2,
                transition: '0.5s',
            },
            letterText: {
                textAlign: 'center',
                fontSize: 30,
                marginTop: 30,
                color: '#3B4049',
            },
            wrapperHover: {
                '&:hover $lidOne': {
                    borderTop: '100px solid rgba(191, 157, 125, 1)',
                    transform: 'rotateX(90deg)',
                    transitionDelay: '0s',
                    backgroundImage: 'none'
                },
                '&:hover $lidTwo': {
                    transform: 'rotateX(180deg)',
                    transitionDelay: '0.25s',
                    borderTop: '100px solid rgba(191, 157, 125, 1)',
                },
                '&:hover $letter': {
                    transform: 'translateY(-50px)',
                    transitionDelay: '0.5s',
                },
            },
        })
    );

    const classes = useStyles();

    return (
        <Link underline="none" color="inherit" component={RouterLink} to={'/'}>

            <Container className={classes.body} {...other}>
                <Box className={`${classes.wrapper} ${classes.wrapperHover}`}>
                    <div className={`${classes.lid} ${classes.lidOne}`} />
                    <div className={`${classes.lid} ${classes.lidTwo}`} />
                    <div className={classes.envelope} />
                    <div className={`${classes.letter}`}>
                        <Typography variant="h3" className={classes.letterText} paddingTop={3}>For you</Typography>
                    </div>
                </Box >
            </Container >
        </Link>

    )
}