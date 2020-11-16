import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BackHomeButton from "../BackHomeButton/BackHomeButton";
import {
    Typography,
    Grid,
    Container,
    CardContent,
    Card,
    useMediaQuery,
    CardActionArea,
} from '@material-ui/core';


import "./ExamList.scss"

import data from "../../db/examDb"


const ExamList = () => {

    const [state, setState] = useState();

    useEffect(() => {
        setState(data);
    },[])

    return (
        <Container disableGutters={useMediaQuery('(min-width:500px)') ? false : true}>  
            <BackHomeButton />

            <Grid container spacing={3}>
                {state && state.map((item) => (
                    <Grid key={item.name} item xs={12} sm={6} md={3}>
                        <Card variant="outlined" className='height100' >
                            <CardActionArea to={`/examDetail/${item.name}`} component={Link} className='height100'>
                                <CardContent className='height100'>
                                    <Typography >{item.name}</Typography>
                                    <Typography variant='h6'>do you know {item.name}?</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ExamList;