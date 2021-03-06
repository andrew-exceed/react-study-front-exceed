import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

import "./BackHomeButton.scss"

const BackHomeButton = ({url}) => {

    return (
        <div className='backhome'>
            <Button
                component={Link}
                size='large'
                to={url ? url : '/'}
                variant="contained"
                color="primary"
            >
                Back
            </Button>
        </div>
    );
}

export default BackHomeButton;