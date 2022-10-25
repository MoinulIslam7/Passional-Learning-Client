import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';


const Register = () => {
    const [error, setError] = useState('');
    const { createUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.Name.value;
        const email = form.email.value;
        const photoURL = form.PhotoURL.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError('');
                console.log("Register user : ", user);
            })
            .catch((error) => {
                console.error("error : ", error);
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error("error : ", error);
            })
    }

    const handleGitHubSignIn = () => {
        signInWithGitHub()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error("error : ", error);
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='Name' placeholder="Your Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='PhotoURL' placeholder="Your Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label mt-3">
                                    <span>Already Have an Account? <Link to='/login' className="label-text-alt link link-hover">Login Here</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='flex justify-evenly mb-3'>
                            <div>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                            </div>
                            <div>
                                <button onClick={handleGitHubSignIn} className="btn btn-outline btn-success">GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;