import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Container,
} from '@material-ui/core';

import BackHomeButton from '../BackHomeButton/BackHomeButton'

import "./Topic.scss"
import data from "../../db/db"

const Topic = ({id}) => {
    const [state, setState] = useState();
    const [count, setCount] = useState(0)
    let history = useHistory();
    
    useEffect(() => {
        if (count > 1) {
            !state && history.push("/");
            state && state.type === 'forExam' && history.push("/exam");
            state && state.type === 'finalExam' && history.push("/finish");
        } else {
            setState(data[id-1]);
            setCount(count+1);
        }
    }, [count, state, id, history])
    
    return (
        <Container>
            <BackHomeButton />
            <Grid container spacing={3} alignItems="stretch">
                <Grid item xs={12} ><Typography variant='h3'>{state && state.title}</Typography></Grid>
                    {state && state.data && state.data.map((item, i) =>
                        <React.Fragment key={i}>
                            <Grid key={i} item xs={12}><Typography variant='h5' color='textSecondary'>{item.title}</Typography></Grid>
                                {item.info.map((info, id) => 
                                    <React.Fragment key={id}>
                                        <Grid key={i} item xs={12} sm={6} md={3} >
                                            <Card variant="outlined" className='height100' >
                                                <CardContent className='height100'>
                                                        <Typography gutterBottom variant="h5" component="h2">{info.name}</Typography>
                                                        {info.links.map((link, index) => 
                                                            <div className='card-link' key={index}>
                                                                <a target="_blank" rel="noopener" component='a' href={link}>{link}</a>
                                                            </div>
                                                        )}
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </React.Fragment> 
                                )}
                        </React.Fragment>
                    )}  
            </Grid>
        </Container>
    );
}

export default Topic;





















