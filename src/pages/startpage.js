import React from "react";
import "../styles/startpage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../util/routes.js";

const StartPage = () => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        console.log("Button clicked");
    }

    const handleAboutButton = () => {
        navigate("/about");
    };

    return (
        <div className="startPage">
            <div className="content-box">
                <div className="content-box-header">
                    <div className="content-box-title">Welcome to</div>
                    <div className="content-box-header-text">
                    Community-Based Learning Advisor
                    </div>
                </div>
                <div className="empty-line"></div>
                <div className="content-box-inner">
                Helping you transition smoothly to Community-Based Learning
                <Button onClick={onButtonClick}
                    sx={{
                        backgroundColor:"#FFFFFFFF",
                        color:"#000000",
                        width: "606px",
                        height: "200px",
                        borderRadius: "10px",
                        fontSize: "40px",
                        fontFamily: 'Univers',
                        marginTop: "135px",
                        marginBottom: "135px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        '&:hover': {
                            backgroundColor: "#FFFFFF",        
                        },
                    }}
                    variant="contained">
                Let's Start
                </Button>
                </div>
                <div className="empty-line-shorten"></div>
                <div className="content-box-footer">
                You can learn more about Community-Based Learning
                    <div className="hereButton-container">
                        <Button onClick={handleAboutButton}
                            sx={{
                            backgroundColor:"#FFFFFFFF",
                                color:"#000000",
                                width: "213px",
                                height: "38px",
                                borderRadius: "10px",
                                fontSize: "20px",
                                fontFamily: 'Univers',
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                '&:hover': {
                                    backgroundColor: "#FFFFFFFF",

                                },
                            }}
                            variant="contained">
                            Here
                        </Button>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>
        
    );
};

export default StartPage;