import React from "react";
import "../styles/headerbar.css";

const HeaderBar = () => {
    return (
        <div className="header">
        <header className="header-bar">
            <div className="logo-container">
                <img src="../../public/Assets/UTLogo/utlogo.png" alt="logo" className="logo"/>
            </div>
            <div className="comBL-logo-container">
                <img src="../../public/Assets/" alt="combllogo" className="comBL-logo"/>
            </div>
        </header>
        </div>
    );
}

export default HeaderBar;