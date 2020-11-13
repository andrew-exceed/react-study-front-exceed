import React, { useEffect, useState } from "react";
import BackHomeButton from '../BackHomeButton/BackHomeButton'

import "./FinalExam.scss"
import data from "../../db/db"

const FinalExam = () => {

    const [state, setState] = useState();
    useEffect(() => {
        setState(data[11]);
    })

    return (
        <>
        <BackHomeButton />
        {state && state.data}
        </>
    );
}

export default FinalExam;