import React from "react";
import { useParams } from "react-router-dom";

import ExamDetail from '../components/ExamDetail/ExamDetail'

const ExamDetailPage = () => {
    let { slug } = useParams();
    return (
        <ExamDetail slug={slug} />
    );
}

export default ExamDetailPage;