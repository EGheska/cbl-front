import React, { useEffect } from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../util/routes.js";


const NavBar = ({additionalBarItems}) => {
    const [additionalItems, setAdditionalItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        console.log("Location:" + location.pathname);
        additionalBarItems.forEach((item) => {
            if (item.type === "cbl" && location.pathname === "/cbl") {
                setAdditionalItems(["Community-Based Learning"]);
            }
            if (item.type === "about" && location.pathname === "/about") {
                setAdditionalItems(["About"]);
                console.log("NavBarItems:" + additionalItems);
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
        </div>
    );
};

export default NavBar;