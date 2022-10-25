import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div className='mt-4 grid justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-bold">Your selected Course: {course.title}</h2>
                    <h2 className="card-title text-bold"> You have to payment: {course.price}</h2>
                    <p>Confirm your payment and then click continue</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;