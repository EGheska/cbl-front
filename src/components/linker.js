import {React} from "react";
import "../styles/linker.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Linker = ({items}) => {
    const [isComBLtoRender, setisComBLtoRender] = useState();
    const location = useLocation();

    useEffect(() => {
        items.forEach((item) => {
            if (item.type === "cbl" && location.pathname === "/cbl") {
                setisComBLtoRender(true);
            };
        });

    }, [isComBLtoRender, location.pathname]);

    return (
        <div className="linker">
            <Button 
                onClick={() => window.location.href = "/start"}
                variant="text"
                sx={{
                    color:"#5A5A5A",
                    fontSize: "20px",
                    fontFamily: 'UniversBold',
                    '&:hover': {
                        color: "#FFFFFF",
                    },
                }}
            >
                HOME
            </Button>
            <div className="linker-img">
                <img src="/Assets/Vector.svg" alt="Arrow" />
            </div>
            {/* <Button 
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
                </Button> */}
                {/* <div className="linker-img">
                    <img src="/Assets/Vector.svg" alt="Arrow" />
                </div> */}
            {isComBLtoRender ? (
               <div className="linker-div">ComBL</div>
                // <Button 
                //     variant="text"
                //     sx={{
                //         color:"#5A5A5A",
                //         fontSize: "20px",
                //         fontFamily: 'Univers',
                //         '&:hover': {
                //             color: "#FFFFFF",
                //         },
                //     }}
                // >
                //     COMMUNITY-BASED LEARNING
                // </Button>
                
            ) : (
                <div className="linker-div">Spiderweb Framework</div>    
            // <Button 
            //     variant="text"
            //     sx={{
            //         color:"#5A5A5A",
            //         fontSize: "20px",
            //         fontFamily: 'Univers',
            //         '&:hover': {
            //             color: "#FFFFFF",
            //         },
            //     }}
            // >
            //     Spiderweb Framework
            // </Button>)}
            )}
        </div>
    );
};

export default Linker;