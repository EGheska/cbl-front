import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBar from './headerbar';
import NavBar from './navbar';

const Layout = ({items}) => {
    const location = useLocation();
    const headerBarRoutes = ["/", "/start", "/cbl-toolkit/result", "/cbl-toolkit/advice"];
    const isHeaderBar = headerBarRoutes.includes(location.pathname);

    return (
        <>
            {isHeaderBar ? <HeaderBar /> : <NavBar additionalBarItems={items}/>}
        </>
    );
};

export default Layout;
