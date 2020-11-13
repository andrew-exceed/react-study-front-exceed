import React from "react";
import { useParams } from "react-router-dom";

import Topic from '../components/Topic/Topic'

const TopicPage = () => {
    let { id } = useParams();
    

    return (
        <Topic id={id} />
    );
}

export default TopicPage;