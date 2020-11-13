import { Link } from "react-router-dom";
import React from "react";
import BackHomeButton from "../BackHomeButton/BackHomeButton";

import "./Exam.scss"

const Exam = () => {

    return (
        <>
            <BackHomeButton />
            списки экзов
            <Link to='/examDetail/QWE'>toDetail</Link>
        </>
    );
}

export default Exam;