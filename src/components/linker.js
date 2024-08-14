import {React} from "react";
import "../styles/linker.css";
import {Button} from "@mui/material";
import {useState} from "react";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import others from "../pages/others";

const Linker = ({items}) => {
    const [isFromToolkit, setIsFromToolkit] = useState(false);
    const [isComBLtoRender, setisComBLtoRender] = useState({
        combl: false,
        others: false,
    });
    // const [isOthers, setisOthers] = useState();
    const location = useLocation();

    useEffect(() => {

        if (location.pathname === '/cbl-toolkit') {
            setIsFromToolkit(true);
        }

        items.forEach((item) => {
            if (item.type === "cbl" && location.pathname === "/cbl") {
                setisComBLtoRender(prevState => ({
                    ...prevState,
                    combl: true,
                    others: false,

                }))
            } else if (item.type === "cbl-in-others" && location.pathname === "/cbl-in-others") {
                setisComBLtoRender(prevState => ({
                    ...prevState,
                    combl: false,
                    others: true,
                }))
            }
        });

    }, [isComBLtoRender, location.pathname, isFromToolkit]);

    return (
        <div className="linker">
            <Button
                onClick={() => window.location.href = "/start"}
                variant="text"
                sx={{
                    color: "#5A5A5A",
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
                <img src="/Assets/Vector.svg" alt="Arrow"/>
            </div>
            {isFromToolkit ? (
                <div>

                </div>
            ) :(
                <div>
                    {isComBLtoRender.combl && (
                        <div className="linker-div">about ComBL</div>
                    )}
                    {!isComBLtoRender.others && !isComBLtoRender.combl && (
                        <div className="linker-div">Spiderweb Framework</div>
                    )}
                    {isComBLtoRender.others && (
                        <div className="linker-div">ComBL in Other Universities</div>
                    )}
                </div>
            )}


        </div>
    );
};

export default Linker;