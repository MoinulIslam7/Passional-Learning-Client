import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div className='mt-4 mx-52'>
            <div className="card lg:card-side bg-base-800 shadow-xl">
                <figure><img className='w-96 h-96' src={courseDetails.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Course Name: {courseDetails.title}</h2>
                    <h2 className="card-title">Course Instructor: {courseDetails.instructor}</h2>
                    <p> Course details: {courseDetails.details}</p>
                    <div className='flex'>
                    <p>Duration: {courseDetails.Duration} Hour</p>
                    <p> Ratings:  {courseDetails.ratings}/5</p>
                    </div>
                    <h2 className='text-2xl'>Price: {courseDetails.price} TAKA </h2>
                    <Link to={`/Checkout/${courseDetails.id}`} className="card-actions justify-center">
                        <button className="btn btn-primary">Get Premium Access</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;