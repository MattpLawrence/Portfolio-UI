import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import './topNavStyles.scss';
import ScrollTop from './components/ScrollTop';



export function TopNav() {


    return (
        <React.Fragment>
            <div className="topNavContainer">

            </div>
            <ScrollTop >
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}