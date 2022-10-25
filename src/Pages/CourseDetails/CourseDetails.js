import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const Details = useLoaderData();
    console.log(Details);
    return (
        <div className='mt-4'>
            <h2>this is course details: {Details.title}</h2>
        </div>
    );
};

export default CourseDetails;