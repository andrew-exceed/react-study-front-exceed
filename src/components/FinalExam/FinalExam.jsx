import React, { useEffect, useState } from "react";
import BackHomeButton from '../BackHomeButton/BackHomeButton'
import {
    Typography,
    Grid,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    useMediaQuery,
} from '@material-ui/core';


import "./FinalExam.scss"
import data from "../../db/finalTestDb"

const FinalExam = () => {

    const [state, setState] = useState();

    useEffect(() => {
        setState(data);
    },[])

    console.log(state);

    return (
        <Container disableGutters={useMediaQuery('(min-width:500px)') ? false : true}>  
            <BackHomeButton />

            <Grid container className='info-block'>
                <Grid item xs={12}>
                    <Typography variant="h6">{state && state[0].title}</Typography>
                </Grid>
                <Grid item xs={12} sm={11} md={8}>
                    <Typography component='pre' variant="body2">{state && state[0].description}</Typography>
                </Grid>
            </Grid>

            <Grid container className='info-block'>
                <Grid item xs={12}>
                    <Typography variant="h6">{state && state[1].title}:</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Технологии</TableCell>
                                    <TableCell>Описание</TableCell>
                                    <TableCell>Материал</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {state && state[1].items.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell >{row.description}</TableCell>
                                    <TableCell >
                                        {row.links.map((link) => <><a target="_blanck" href={link.url}>{link.name}</a>&#8195;</>)}
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={false} md={3} />
            </Grid>

            <Grid container className='info-block'>
                <Grid item xs={12}>
                    <Typography variant="h6">{state && state[2].title}:</Typography>
                </Grid>
                <Grid item xs={12} sm={11} md={8}>
                    <Typography component='pre' variant="body2">{state && state[2].description}</Typography>
                </Grid>
            </Grid>

            <Grid container className='info-block'>
                <Grid item xs={12}>
                    <Typography variant="h6">{state && state[3].title}:</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography component='a' target="_blanck" href={state && state[3].link} variant="subtitle2">{state && state[3].link}</Typography>
                </Grid>
                <Grid item xs={12} sm={11} md={8}>
                    <Typography component='pre' variant="body2">{state && state[3].description}</Typography>
                </Grid>
            </Grid>

        </Container>
    );
}

export default FinalExam;   