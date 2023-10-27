import { AppBar, Box, Fab, Fade, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

function ScrollTop(props: any) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({

        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#root');

        console.log(anchor);

        if (anchor) {
            anchor.scrollIntoView({
                block: 'start',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

export function TopNav() {

    function HideOnScroll(props: any) {
        const { children } = props;
        //set up trigger to hide app bar
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 100,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <React.Fragment>
            <HideOnScroll >
                <AppBar id="topScrollAnchor">
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Scroll to hide App bar
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <ScrollTop >
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}