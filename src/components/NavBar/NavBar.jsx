import React from "react";
import { Paper } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

import "./NavBar.scss"

const NavBar = () => {
    let history = useHistory();

    return (
        <Paper component='header' className='navbar' elevation={7} square >
            <Link to="/"><img src='/images/exlove.png' /></Link>
        </Paper>
    );
}

export default NavBar;