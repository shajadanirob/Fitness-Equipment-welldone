import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const NavLinks = (
        <>
            <ol>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
                    }
                >
                    Home
                </NavLink>
            </ol>

            <ol>
                <NavLink
                    to="/products"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
                    }
                >
                    Products
                </NavLink>
            </ol>

            <ol>
                <NavLink
                    to="/myCart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
                    }
                >
                    MyCart
                </NavLink>
            </ol>

            <ol>
                <NavLink
                    to="/productManagement"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
                    }
                >
                    Product Management
                </NavLink>
            </ol>
        </>
    );

    return (
        <nav className="bg-white shadow-md  md:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                   
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <svg
                                className={`${menuOpen ? 'hidden' : 'block'} h-3 w-3`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            <svg
                                className={`${menuOpen ? 'block' : 'hidden'} h-3 w-3`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                     <div className='h-6 w-20 ml-36'>
                     <img src="https://welldone.axiomthemes.com/wp-content/uploads/2024/04/logo-3.png" alt="" />
                     </div>
                    </div>
                </div>
            </div>

            <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 mx-auto sm:px-3">
                    {NavLinks}
                </div>
            </div>
        </nav>
    );
};

export default MobileNavbar;
