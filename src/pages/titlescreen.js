import React from "react";
import "../styles/titlescreen.css";
import ContentBox from "../components/content-box";
import { useNavigate } from "react-router-dom";
import { START_ROUTE } from "../util/const.js";

const TitleScreen = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.warn("Navigating to about page");
        navigate(START_ROUTE);
    }

    return (
        <div className="titleScreen">
            <ContentBox onButtonClick={handleButtonClick}/>
        </div>
    );
}

export default TitleScreen;