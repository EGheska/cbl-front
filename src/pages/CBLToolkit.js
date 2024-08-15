import React, {useEffect} from "react";
import Linker from "../components/linker";
import {Button} from "@mui/material";
import Question from "../components/question";
import {useLocation, useNavigate} from "react-router-dom";


const CBLToolkit = ({items}) => {

    const [questionData, setQuestionData] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const handleQuestionData = (data) => {
        setQuestionData(data);
    }

    const handleClick = () => {
       if(currentQuestion < questionData.length - 1) {
           const nextQuestion = questionData[currentQuestion + 1];
           setCurrentQuestion(currentQuestion + 1);
           switch (nextQuestion) {
               case "learning":
                   navigate("/cbl-toolkit/learning");
                   break;
               case "aims":
                   navigate("/cbl-toolkit/aims");
                   break;
               case "content":
                   navigate("/cbl-toolkit/content");
                   break;
               case "activities":
                   navigate("/cbl-toolkit/activities");
                   break;
               case "role":
                   navigate("/cbl-toolkit/role");
                   break;
               case "resources":
                   navigate("/cbl-toolkit/resources");
                   break;
               case "grouping":
                   navigate("/cbl-toolkit/group");
                   break;
               case "location":
                   navigate("/cbl-toolkit/location");
                   break;
               case "time":
                   navigate("/cbl-toolkit/time");
                   break;
               case "assessment":
                   navigate("/cbl-toolkit/assessment");
                   break;
               default:
                   console.log("Unknown question type");
                   break;
           }
       } else {
           // Navigate to results
           console.log("No more questions");
       }
    };

    return (
        <div className="pageClass">
            <Linker items={items}/>
            <div className="questionaire-container">
                <div className="content-box-header">Community-Based Learning Helper</div>
                <div classname="question-container">
                    <Question items={items} onQuestionData={handleQuestionData} currentQuestion={currentQuestion}/>
                </div>
            </div>
            <div className="questionaire-footer">
                <Button variant="contained"
                        onClick={handleClick}
                >
                    Next
                </Button>
            </div>
        </div>
    )
};

export default CBLToolkit;