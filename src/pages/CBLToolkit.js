import React, {useEffect, useState} from "react";
import Linker from "../components/linker";
import {Button} from "@mui/material";
import Question from "../components/question";
import * as Routes from "../util/const.js";
import {useLocation, useNavigate} from "react-router-dom";
import "../styles/CBLTooltip.css";

const CBLToolkit = ({items}) => {
    const [isFinal, setisFinal] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname.endsWith("/assessment")){
            setisFinal(true);
        }
        const questionTypes = [
            "learning",
            "aims",
            "content",
            "activities",
            "role",
            "resources",
            "grouping",
            "location",
            "time",
            "assessment"
        ];
        setQuestionData(questionTypes);

        const routeToIndexMap = {
            [Routes.LEARNING]: 0,
            [Routes.AIMS]: 1,
            [Routes.CONTENT]: 2,
            [Routes.ACTIVITIES]: 3,
            [Routes.ROLE]: 4,
            [Routes.RESOURCES]: 5,
            [Routes.GROUP]: 6,
            [Routes.LOCATION]: 7,
            [Routes.TIME]: 8,
            [Routes.ASSESSMENT]: 9,
        };

        const currentIndex = routeToIndexMap[location.pathname];
        if (currentIndex !== undefined) {
            setCurrentQuestionIndex(currentIndex);
        }
    }, [location.pathname]);

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questionData.length) {
            setCurrentQuestionIndex(nextIndex);

            const routeMap = [
                Routes.LEARNING,
                Routes.AIMS,
                Routes.CONTENT,
                Routes.ACTIVITIES,
                Routes.ROLE,
                Routes.RESOURCES,
                Routes.GROUP,
                Routes.LOCATION,
                Routes.TIME,
                Routes.ASSESSMENT,
            ];
            navigate(routeMap[nextIndex]);
        }
    };

    return (
        <div className="pageClass-toolkit">
            <Linker items={items}/>
            <div className="questionaire-container">
                <div className="content-box-header">Community-Based Learning Helper</div>
                <div classname="question-container">
                    <Question question={questionData[currentQuestionIndex]}/>
                </div>
            </div>
            <div className="questionaire-footer">
                <Button variant="contained"
                        onClick={handleNextQuestion}
                        sx={{
                            backgroundColor: "#FFFFFFFF",
                            color: "#000000",
                            // marginLeft: "40%",
                            width: "213px",
                            height: "38px",
                            borderRadius: "10px",
                            fontSize: "20px",
                            fontFamily: 'Univers',
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            '&:hover': {
                                backgroundColor: "#FFFFFFFF",
                            },
                            marginBottom: "5%",
                            marginTop: "2%",
                        }}
                >
                    {isFinal ? "Submit" : "Next"}
                </Button>
            </div>
        </div>
    )
};

export default CBLToolkit;