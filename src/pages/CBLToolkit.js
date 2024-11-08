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
        setisFinal(false);
        if (location.pathname.endsWith("/assessment")) {
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

    const handlePrevQuestion = () => {
        const prevIndex = currentQuestionIndex - 1;
        if (prevIndex >= 0) {
            setCurrentQuestionIndex(prevIndex);

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
            navigate(routeMap[prevIndex]);
        }
    }

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

        if(nextIndex === questionData.length) {
            navigate(Routes.RESULT);
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
                        onClick={handlePrevQuestion}
                    sx={{
                    backgroundColor: "#FFFFFFFF",
                    color: "#000000",
                    // marginLeft: "40%",
                    width: "200px",
                    height: "50px",
                    borderRadius: "10px",
                    fontSize: "20px",
                    fontFamily: 'Univers',
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    '&:hover': {
                        backgroundColor: "#FFFFFFFF",
                    },
                    marginBottom: "5%",
                    marginRight: "16px",
                    marginTop: "21px",
                }}>
                    Previous
                </Button>
                <Button variant="contained"
                        onClick={handleNextQuestion}
                        sx={{
                            backgroundColor: isFinal ? "#CEFFA7" : "#FFFFFFFF",
                            color: "#000000",
                            // marginLeft: "40%",
                            width: "200px",
                            height: "50px",
                            borderRadius: "10px",
                            fontSize: "20px",
                            fontFamily: 'Univers',
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            '&:hover': {
                                backgroundColor: isFinal ? "#CEFFA7" : "#FFFFFFFF",
                            },
                            marginBottom: "5%",
                            marginTop: "21px",
                        }}
                >
                    {isFinal ? "Submit" : "Next"}
                </Button>
            </div>
        </div>
    )
};

export default CBLToolkit;