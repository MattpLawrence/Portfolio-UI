import React from 'react';
import { Box, Fade, useScrollTrigger } from '@mui/material';



export default function ScrollTop(props: any) {
    const { children } = props;
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