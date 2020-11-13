import React, { useEffect, useState } from "react";
import BackHomeButton from "../BackHomeButton/BackHomeButton";
import {
    Grid,
    Container,
    FormControl,
    FormControlLabel,
    Switch
} from '@material-ui/core';

import "./ExamDetail.scss"

const ExamDetail = ({slug}) => {
    const [isStudy, setIsStudy ] = useState(true);

    const handleChangeGrid = () =>{
        setIsStudy(!isStudy)
    }

    return (
        <Container>
            <BackHomeButton />

            <Grid container spacing={3}>
                <Grid item xs={12} justify='end'>
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

            {isStudy ?
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        конкретный экз c ответами
                        {slug}
                    </Grid>
                </Grid> 
                :
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Вопросы без ответов
                    </Grid>
                </Grid>
            }

        </Container>
    );
}

export default ExamDetail;