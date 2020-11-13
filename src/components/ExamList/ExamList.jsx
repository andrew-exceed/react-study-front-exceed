import { Link } from "react-router-dom";
import React from "react";
import BackHomeButton from "../BackHomeButton/BackHomeButton";

import "./ExamList.scss"

const ExamList = () => {

    return (
        <>
            <BackHomeButton />
            списки экзов
            <Link to='/examDetail/Java-Script'>toDetail</Link>
        </>
    );
}

export default ExamList;