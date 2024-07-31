import {React} from "react";
import "../styles/linker.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Linker = ({items}) => {
    const [isComBLtoRender, setisComBLtoRender] = useState();
    const [isSpiderWeb, setisSpiderWeb] = useState();
    const location = useLocation();

    useEffect(() => {
        items.forEach((item) => {
            if (item.type === "cbl" && location.pathname === "/cbl") {
                setisComBLtoRender(true);
            }
            if (item.type === "about" && location.pathname === "/about") {
                setisSpiderWeb(true);
            }
        });

    }, [isComBLtoRender, isSpiderWeb]);

    return (
        <div className="linker">
            <Button 
                variant="text"
                sx={{
                    color:"#5A5A5A",
                    fontSize: "20px",
                    fontFamily: 'Univers',
                    '&:hover': {
                        color: "#FFFFFF",
                    },
                }}
            >
                HOME
            </Button>
            <div className="linker-img">
                <img src="../../public/Assets/Vector.svg" alt="Arrow" />
            </div>
            {isComBLtoRender ? (
                <Button 
                    variant="text"
                    sx={{
                        color:"#5A5A5A",
                        fontSize: "20px",
                        fontFamily: 'Univers',
                        '&:hover': {
                            color: "#FFFFFF",
                        },
                    }}
                >
                    COMMUNITY-BASED LEARNING
                </Button>
            ) : (
                <Button 
                    variant="text"
                    sx={{
                        color:"#5A5A5A",
                        fontSize: "20px",
                        fontFamily: 'Univers',
                        '&:hover': {
                            color: "#FFFFFF",
                        },
                    }}
                >
                    ABOUT
                </Button>
            )}
            {isSpiderWeb ? (
                <Button 
                    variant="text"
                    sx={{
                        color:"#5A5A5A",
                        fontSize: "20px",
                        fontFamily: 'Univers',
                        '&:hover': {
                            color: "#FFFFFF",
                        },
                    }}
                >
                    Spiderweb Framework
                </Button>
            ) : (
                <Button 
                    variant="text"
                    sx={{
                        color:"#5A5A5A",
                        fontSize: "20px",
                        fontFamily: 'Univers',
                        '&:hover': {
                            color: "#FFFFFF",
                        },
                    }}
                >
                    smth
                </Button>
            )}
        </div>
    );
};

export default Linker;