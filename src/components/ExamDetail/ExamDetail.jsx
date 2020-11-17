import React, { useEffect, useState } from "react";
import BackHomeButton from "../BackHomeButton/BackHomeButton";
import {
    Grid,
    Container,
    FormControl,
    FormControlLabel,
    Switch,
    Typography
} from '@material-ui/core';

import "./ExamDetail.scss"
import data from "../../db/examDb"


const ExamDetail = ({slug}) => {
    const [isStudy, setIsStudy ] = useState(true);
    const [state, setState] = useState();
    useEffect(() => {
        setState(data.find(element => element.name === slug));
    },[slug])

    const handleChangeGrid = () => {
        setIsStudy(!isStudy)
    }
    
    return (
        <Container>
            <BackHomeButton url='/exam'/>
            {/* justify='flex-end' */}
            <Grid container spacing={3}>
                <Grid item xs={3} >
                    <FormControl component="fieldset">
                            <FormControlLabel
                                label={isStudy ? 'Learn' : 'Exam'}
                                control={
                                    <Switch
                                        color="primary"
                                        checked={!isStudy}
                                        onChange={handleChangeGrid}
                                        name="Exam"
                                    />
                                }
                            />
                    </FormControl>
                </Grid>
            </Grid> 

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h3'>{state && state.name}</Typography>
                </Grid>
            </Grid> 

            {isStudy ?
                <Grid container spacing={3}>
                    <Grid item xs={12} className='ask-block'>
                        {state && state.items && state.items.map((item, index) => (
                            <div className='ask-block' key={item.ask}>
                                <Typography variant='h5'>{item.ask}</Typography>
                                {item && item.answers && item.answers.map(answ => (
                                    <>
                                        <Typography variant='body2'>{answ.text}</Typography>
                                        <div className='answer-image'>
                                            <img src={answ.image}/>
                                        </div> 
                                        <a href={answ.link}>{answ.link}</a>
                                    </>
                                ))}
                            </div>
                        ))}
                    </Grid>
                </Grid> 
                :
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    {state && state.items && state.items.map((item, index) => (<div className='ask' key={item.ask}>{index+1}){item.ask}</div>))}
                    </Grid>
                </Grid>
            }
        </Container>
    );
}

export default ExamDetail;