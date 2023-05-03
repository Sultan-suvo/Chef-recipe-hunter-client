/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';


function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-600 p-6 container">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <h2 className="font-bold text-2xl ml-2">
                    <span className='text-2xl text-red-600'>Food</span>genix</h2>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="h-3 w-3 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 7h20v2H0V10zm0 7h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full ${isOpen ? 'block' : 'hidden'
                    } flex-grow  lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow lg:flex items-center lg:justify-end">
                    <Link
                        to='/'
                        className="block mt-4 text-base lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                        Home
                    </Link>
                    <Link
                        to='/blog'
                        className="block mt-4 text-base lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                        Blog
                    </Link>
                   
                    {/* {
                    user ?
                        <div>
                            <img src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0">Sign Out</button>
                        </div>
                        :
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0">
                        <Link to='/login'>Log in</Link>
                     </button>
                } */}

                    {user ? (
                        <div className="flex items-center justify-center gap-6">
                            <img
                                title={user.displayName}
                                className="w-12 h-12 rounded-full"
                                src={user.photoURL}
                                alt=""
                            />
                            <button
                                onClick={handleLogOut}
                                className="btn border-0 text-white bg-success px-4 py-2 font-bold rounded-md flex items-center gap-1"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn border-0 text-white bg-success mt-3 px-4 py-2 font-bold rounded-md flex items-center gap-1">
                                Login
                            </button>
                        </Link>
                    )}



                </div>
            </div>

        </nav>
    );
}

export default Navbar;
