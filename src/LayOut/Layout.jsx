import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar/NavBar';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                {/* <Outlet></Outlet> */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;