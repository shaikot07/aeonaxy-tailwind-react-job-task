import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const link = <>
        <li> <Link className="rounded-none text-slate-50 font-bold border-b-0 hover:!text-[#A855F7] hover:border-[#A855F7] hover:border-b-2 transition duration-300 focus:!text-white" to={'/'}>Home</Link> </li>
    </>
    return (
        <div>
            <div className="navbar bg-red-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img src="https://i.ibb.co/HxkFhsJ/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    {link}
                </div>
                <div className="navbar-end">
                    <a className="my-btn">Button</a>
                    <a className="my-btn-outline ml-1">Get Start</a>
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;