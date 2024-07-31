import React, { useEffect } from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import UTLogo from "../../public/Assets/UTLogo/utlogo.png";

const NavBar = ({additionalBarItems}) => {
    const [additionalItems, setAdditionalItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        additionalBarItems.forEach((item) => {
            if (item.type === "cbl" && location.pathname === "/cbl") {
                setAdditionalItems(["Community-Based Learning"]);
            }
            if (item.type === "about" && location.pathname === "/about") {
                setAdditionalItems(["About"]);
            }
        });
    }, [additionalBarItems]);

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
                {additionalItems.length > 0 && (
                    <div className="additional-div">
                        {additionalItems.map((item) => (
                            <p>{item}</p>
                        ))}
                    </div>
                )}
            </nav>
            <div className="navbar-footer">
                <img src="/Assets/UTLogo/logo_navbar.png" alt="UTLogo" />
            </div>
        </div>
    );
};

export default NavBar;
