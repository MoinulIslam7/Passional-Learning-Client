import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

   

    return (
        <div className="grid grid-cols-4 gap-4">

            <div className="w-4/5 mx-auto mt-10">
                <h2 className='text-2xl text-center text-white'>All Courses</h2>
                <hr /> <br />
                {
                    courses.map(course => <div key={course.id}>
                        <div>
                            <Link to={`${course.id}`}>
                                <button className="btn mb-2 w-full">
                                    {course.name}
                                </button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>

            <div className="col-span-3 lg:grid grid-cols-3 gap-4 mt-10 mr-10">
                {
                    courses.map(course => <div key={course.id}>
                        <div className='grid justify-items-center border-2 mb-8 rounded-lg'>
                            <Link to={`${course.id}`}>
                                <img className='w-64 h-64' src={course.logo} alt="" />
                                <h2 className='text-3xl grid justify-items-center border m-4 rounded-xl'>{course.name}</h2>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;