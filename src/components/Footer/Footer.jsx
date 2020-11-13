import React from "react";
import "./Footer.scss"
import { Typography as H, Link } from '@material-ui/core';

const Footer = () => {

    return (
        <footer className='footer'>
            <H variant="body2" color='textSecondary' align='center'>
                Copyright © <Link component="a" target="_blank" rel="noopener" color="inherit" href='https://material-ui.com/ru/'>EXCEED TEAM GROUP</Link> 2020.
                </H>
        </footer>
    );
}

export default Footer;