import React, { useEffect } from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
// import UTLogo from "../../public/Assets/UTLogo/utlogo.png";

const NavBar = ({additionalBarItems}) => {
    const [additionalItems, setAdditionalItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const itemsToShow = new Set(additionalItems.map(item => item.name));
        additionalBarItems.forEach((item) => {
            if (item.type === "cbl" && location.pathname === "/cbl") {
                itemsToShow.add("Community-Based Learning");
            }
            if (item.type === "about" && location.pathname === "/about") {
                itemsToShow.add("Spiderweb Framework");
            }
        });

        const updatedItems = Array.from(itemsToShow).map((name, index) => ({
            id: index,
            name: name
        }));    

        setAdditionalItems(updatedItems);
    }, [additionalBarItems, location.pathname]);

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
                            <Button variant="text"
                                sx={{
                                    color:"#FFFFFF",
                                    fontSize: "15px",
                                    fontFamily: 'Univers',
                                    '&:hover': {
                                        color: "#FFFFFF",
                                    },
                                }}
                            >
                                {item.name}
                            </Button>
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
