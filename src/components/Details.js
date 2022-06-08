import React from 'react';
import { useParams  } from 'react-router-dom';

const Details = () => {
    const params = useParams();
    return (
        <div>
            <h1>Details Phone id : {params.id}</h1>
        </div>
    );
};

export default Details;