import React from "react";
import "../styles/headerbar.css";

const HeaderBar = () => {
    return (
        <div className="header">
        <header className="header-bar">
            <div className="logo-container">
                <img src="/Assets/UTLogo/logo_headerbar.png" alt="logo" className="logo"/>
            </div>
            <div className="comBL-logo-container">
              <h3>UT ComBL Toolkit</h3> 
            </div>
        </header>
        </div>
    );
}

export default HeaderBar;