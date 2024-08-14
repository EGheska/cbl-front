import React, {useEffect} from "react";
import "../styles/navbar.css";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {Button} from "@mui/material";
// import UTLogo from "../../public/Assets/UTLogo/utlogo.png";

const NavBar = ({additionalBarItems}) => {
    // const [additionalItems, setAdditionalItems] = useState([]);
    const [isVisible, setIsVisible] = useState({
        spiderweb: false,
        combl: false,
        others: false,
    });
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/cbl") {
            setIsVisible(prevState => ({
                ...prevState,
                combl: true,
                spiderweb: false,
                others: false,
            }));
        } else if (location.pathname === "/about") {
            setIsVisible(prevState => ({
                ...prevState,
                combl: false,
                spiderweb: true,
                others: false,
            }));
        } else if (location.pathname === "/cbl-in-others") {
            setIsVisible(prevState => ({
                ...prevState,
                combl: false,
                spiderweb: false,
                others: true,
            }));
        } else {
            setIsVisible({
                spiderweb: false,
                others: false,
                combl: false,
            });
        }
    }, [location]);

    // useEffect(() => {
    //     const itemsToShow = new Set(additionalItems.map(item => item.name));
    //     additionalBarItems.forEach((item) => {
    //         if (item.type === "cbl" && location.pathname === "/cbl") {
    //             itemsToShow.add("Community-Based Learning");
    //         }
    //         if (item.type === "about" && location.pathname === "/about") {
    //             itemsToShow.add("Spiderweb Framework");
    //         }
    //     });
    //
    //     const updatedItems = Array.from(itemsToShow).map((name, index) => ({
    //         id: index,
    //         name: name
    //     }));
    //
    //     setAdditionalItems(updatedItems);
    // }, [additionalBarItems, location.pathname]);

    return (
        <div className="navbar">
            <nav className="navbar-bar">
                <div className="about-div">
                    <img src="/Assets/UTLogo/logo_navbar.png" alt="UTLogo"/>
                </div>
                <div className="line-div">
                </div>
                <div className="additional-div">
                    <div className="items-list">
                        {isVisible.spiderweb && (
                            <span style={{marginRight: '10px'}}>&#x2022;</span>
                        )}
                        {!isVisible.spiderweb && (
                            <span style={{fontSize: '20px', marginRight: '10px'}}>&#x25E6;</span>
                        )}
                        <a style={{
                            color: "white", textDecoration: 'none',
                        }} href={
                            "/about"
                        }>
                            Spiderweb Framework
                        </a>
                    </div>
                    <div className="items-list">
                        {isVisible.combl && (
                            <span style={{marginRight: '10px'}}>&#x2022;</span>
                        )}
                        {!isVisible.combl && (
                            <span style={{fontSize: '20px', marginRight: '10px'}}>&#x25E6;</span>
                        )}
                        <a style={{
                            color: "white", textDecoration: 'none',
                        }} href={
                            "/cbl"
                        }>
                            Community-Based Learning
                        </a>
                    </div>
                    <div className="items-list">
                        {isVisible.others && (
                            <span style={{marginRight: '10px'}}>&#x2022;</span>
                        )}
                        {!isVisible.others && (
                            <span style={{fontSize: '20px', marginRight: '10px'}}>&#x25E6;</span>
                        )}
                        <a style={{
                            color: "white", textDecoration: 'none',
                        }} href={
                            "/cbl-in-others"
                        }>
                            ComBL in Other Universities
                        </a>
                    </div>
                </div>
                {/*{additionalItems.length > 0 && (*/}
                {/*    <div className="additional-div">*/}
                {/*        */}
                {/*        {additionalItems.map((item) => (*/}
                {/*            <li className="items-list">*/}
                {/*                <a style={{ */}
                {/*                    color: "white", textDecoration: 'none'*/}
                {/*                }} */}
                {/*                href={*/}
                {/*                    item.name === "Community-Based Learning" ? "#" : "/about"*/}
                {/*                }>*/}
                {/*                <span style={{fontSize: '20px'}}>&#x25E6;</span> {item.name}*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*        */}
                {/*    </div>*/}
                {/*)}*/}
            </nav>
            <div className="navbar-footer">
                UT ComBL Toolkit
                {/*<img src="/Assets/UTLogo/logo_navbar.png" alt="UTLogo"/>*/}
            </div>
        </div>
    );
};

export default NavBar;
