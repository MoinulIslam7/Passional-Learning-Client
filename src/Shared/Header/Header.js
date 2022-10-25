import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from "../../Assets/logo192.png"

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);
    console.log(user?.photoURL);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="navbar bg-sky-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/faq'>FAQ</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

                    </ul>
                </div>
                <div className='flex roundedCircle'>
                    <img className='h-8 w-8 mt-2 ' src={logo} alt="images" />
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Passional Learning</Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/faq'>FAQ</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                    {
                        user?.uid
                            ?
                            <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl">Sign Out</button>
                            :
                            <>
                                <Link to='/login'>
                                    <button className='btn btn-ghost normal-case text-xl'>Log In</button>
                                </Link>
                                <Link to='/register'>
                                    <button className='btn btn-ghost normal-case text-xl'>Register</button>
                                </Link>
                            </>
                    }
                    <div className='flex justify-between'>
                        {
                            user?.photoURL ?
                            <>
                            {user?.photoURL && <img className='w-8 h-8 mx-2 mt-2' src={user?.photoURL} alt="" />
                            }
                            </>  
                            :
                            <>
                            {user?.displayName && <p className='text-2xl'>welcome, {user.displayName}</p>}
                            </>
                     
                        }
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Theme</Link>
            </div>
        </div>
    );
};

export default Header;