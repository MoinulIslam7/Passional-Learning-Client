import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo192.png"
const Header = () => {

    const handleTheme = () => {
        
    }
    return (
        <div className="navbar bg-primary text-primary-content justify-between">
            <div>
                <img className='h-10 w-10 ml-2' src={logo} alt="images" />
                <Link to='/' className=" app btn btn-ghost normal-case text-xl">Development Learning Platform</Link>
                <button onClick={handleTheme} className="btn btn-ghost normal-case text-xl" to='/theme'>Theme</button>
            </div>
            <div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/faq'>FAQ</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;