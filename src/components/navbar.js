import React from "react";
import "../styles/navbar.css";



const NavBar = (additionalBarItems) => {

    return (
        <div className="navbar">
        <nav className="navbar-bar">
            <div className="about-div">
                <h1>About</h1>
            </div>
            <div className="cbl-div">
                <p>Community-Based Learning</p>
            </div>
            <div className="line-div">
            </div>
            {additionalBarItems  && (
                <div className="additional-div">
                    <p>Additional</p>
                </div>
            )}
        </nav>
        </div>
    );
};

export default NavBar;