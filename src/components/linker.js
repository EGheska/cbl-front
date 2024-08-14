import {React} from "react";
import "../styles/linker.css";
import {Button} from "@mui/material";
import {useState} from "react";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import others from "../pages/others";

const Linker = ({items}) => {
    const location = useLocation();
    const [isFromToolkit, setIsFromToolkit] = useState(false);
    const [isComBLtoRender, setisComBLtoRender] = useState({
        combl: false,
        others: false,
    });
    const [isToolkitRender, setisToolkitRender] = useState({
        questionaire: false,
        result: false,
    });

    useEffect(() => {
        // Reset states initially
        setIsFromToolkit(false);
        setisComBLtoRender({ combl: false, others: false });
        setisComBLtoRender({ questionaire: false, result: false });

        if (location.pathname === '/cbl-toolkit') {
            setIsFromToolkit(true);
            setisComBLtoRender({ questionaire: true, result: false });
        }

        items.forEach((item) => {
            if (item.type === "cbl" && location.pathname === "/cbl") {
                setisComBLtoRender({ combl: true, others: false });
            } else if (item.type === "cbl-in-others" && location.pathname === "/cbl-in-others") {
                setisComBLtoRender({ combl: false, others: true });
            }
        });

    }, [location.pathname, items]);

    // useEffect(() => {
    //
    //     if (location.pathname === 'cbl-toolkit') {
    //         setIsFromToolkit(true);
    //     }
    //
    //     let foundMatch = false;
    //
    //     items.forEach((item) => {
    //
    //         if (item.type === "cbl-toolkit" && location.pathname === "/cbl-toolkit") {
    //             foundMatch = true;
    //             setisToolkitRender(prevState => ({
    //                 ...prevState,
    //                 questionaire: true,
    //                 result: false,
    //             }))
    //         }
    //
    //         if (item.type === "cbl" && location.pathname === "/cbl") {
    //             foundMatch = true;
    //             setisComBLtoRender(prevState => ({
    //                 ...prevState,
    //                 combl: true,
    //                 others: false,
    //
    //             }))
    //         } else if (item.type === "cbl-in-others" && location.pathname === "/cbl-in-others") {
    //             foundMatch = true;
    //             setisComBLtoRender(prevState => ({
    //                 ...prevState,
    //                 combl: false,
    //                 others: true,
    //             }))
    //         }
    //     });
    //
    //     if (!foundMatch) {
    //         setisComBLtoRender({
    //             combl: false,
    //             others: false,
    //         })
    //     }
    //
    // }, [location.pathname, isToolkitRender, isComBLtoRender]);

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
                    {isToolkitRender.questionaire && (
                        <div className="linker-div">ComBL Toolkit</div>
                    )}
                    {isToolkitRender.result && (
                        <div className="linker-div">Results</div>
                    )}
                </div>
            ) : (
                <div>
                    {isComBLtoRender.combl && (
                        <div className="linker-div">about ComBL</div>
                    )}
                    {!isComBLtoRender.others && !isComBLtoRender.combl && !isFromToolkit && (
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