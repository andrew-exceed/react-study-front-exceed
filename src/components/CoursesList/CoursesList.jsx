import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Container,
    Grid,
} from '@material-ui/core';

import data from "../../db/db"

const CoursesList = () => {
    const [state, setState] = useState();
    useEffect(() => {
        setState(data);
    })

    const list = state && state.map((data, i) => {
        let { id, title, discription, imgUrl, type, index } = data;
        return(
            <Grid key={id} item xs={12} sm={6} md={4} >
                <Card variant="outlined" className='height100'>
                    <CardActionArea 
                        className='height100'
                        component={Link} 
                        to={
                            type === 'forReading' ? `/topic/${index}` :
                            type === 'forExam' ? `/exam` :
                            type === 'finalExam' ? `/finish` : ''
                        }
                    >
                        <CardMedia
                            component="img"
                            alt='qwe'
                            height="220"
                            image={imgUrl}
                            title="qwe"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {discription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    });

    return (
        <Container>
            <Grid container spacing={4} alignItems="stretch">
                {list}
            </Grid>
        </Container>
    );
}

export default CoursesList;





















