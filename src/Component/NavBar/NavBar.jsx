
import { Link,  } from 'react-router-dom';

const NavBar = () => {
    const link = <>
        <li className='list-none'> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#006CFE] hover:border-[#006CFE] hover:border-b-2 transition duration-300 focus:!text-[#006CFE]" to={'/'}>Home</Link> </li>
        <li className='list-none'> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#006CFE] hover:border-[#006CFE] hover:border-b-2 transition duration-300 focus:!text-[#006CFE]" to={'/'}>Individuals</Link> </li>
        <li className='list-none'> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#006CFE] hover:border-[#006CFE] hover:border-b-2 transition duration-300 focus:!text-[#006CFE]" to={'/'}>Teams</Link> </li>
        <li className='list-none'> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#006CFE] hover:border-[#006CFE] hover:border-b-2 transition duration-300 focus:!text-[#006CFE]" to={'/'}>Enterprise</Link> </li>
        <li className='list-none'> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#006CFE] hover:border-[#006CFE] hover:border-b-2 transition duration-300 focus:!text-[#006CFE]" to={'/'}>Product</Link> </li>
        <li className='list-none'> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#006CFE] hover:border-[#006CFE] hover:border-b-2 transition duration-300 focus:!text-[#006CFE]" to={'/'}>Pricing</Link> </li>
        <li className='list-none'> <Link className="rounded-none text-black font-bold border-b-0 hover:!text-[#006CFE] hover:border-[#006CFE] hover:border-b-2 transition duration-300 focus:!text-[#006CFE]" to={'/'}>Resources</Link> </li>
    </>
    return (
        <div>
            <div className="navbar bg-[#FFFFFF] max-w-7xl mx-auto">
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
                    <ul className="menu menu-horizontal px-1">
                       {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="text-1xl font-semibold">Log In</a>
                    <a className="my-btn ml-1">Get Start</a>

                </div>
            </div>
        </div>
    );
};

export default NavBar;