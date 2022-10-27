import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Checkout = () => {
    const course = useLoaderData();
    const {user} = useContext(AuthContext);
    return (
        <div className='mt-4 grid justify-center'>
            <div className="card w-full  shadow-xl my-4">
                <div className="card-body">
                    <h1 className='text-5xl text-bold'>Welcome, {user.displayName}</h1>
                    <h2 className="card-title text-bold">Your selected Course: {course.title}</h2>
                    <h2 className="card-title text-bold"> You have to pay: {course.price} TAKA Only.</h2>
                    <h2 className="card-title text-bold"> Your verified email: {user.email}</h2>
                    <p>Confirm your payment and then click continue..</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;