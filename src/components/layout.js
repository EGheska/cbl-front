import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBar from './headerbar';
import NavBar from './navbar';

const Layout = () => {
    const location = useLocation();
    const headerBarRoutes = ["/", "/start"];
    const isHeaderBar = headerBarRoutes.includes(location.pathname);

    return (
        <>
            {isHeaderBar ? <HeaderBar /> : <NavBar />}
        </>
    );
};

export default Layout;
