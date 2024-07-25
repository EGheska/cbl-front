import React from "react";
import "../styles/content-box.css";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";

const ContentBox = ({onButtonClick}) => {
    return (
        <div className="contentBox">
            <div className="contentName">
                Adopting Community-Based Learning 
                <div className="ContentName">
                    in UT Courses and Programs
                </div>
            </div>
            <div className="emptyLine-title">

            </div>
            <div className="contentText">
                About the Community Based Advisor
                <div className="emptyLine"></div>
                <div className="contentText-inner">
              Community-Based Learning Advisor is a web serivce designed to assist educators in transitioning to and adopting a community-based learning (ComBL) approach. The platform offers comperhensive information on the ComBL educational methodology, described using the Van den Akker Spider Web curriculum model. It includes a questionnaire to help identify the current educational approach being used. Based on the results, the service provides recommendations on the necessary changes to implement a community-based learning model effectivelty.
                </div>
            </div>
            <div className="mainText">
                How to use the web-serivce
                <div className="emptyLine"></div>
                <div className="mainText-inner">
                    Access the Main Tabs:
                    <ul>
                        <li>Navigate to the two maing tabs on the "Start" page</li>
                        <li>The first tab contains the questionnaire tool</li>
                        <li>The second tab provides comprehensive information about community-based learning</li>
                    </ul>
                    The Second Tab - Complete the Questionnaire:
                    <ul>
                        <li>The questionnaire consist of 10 questions.</li>
                        <li>Each question corresponds to a part of the Van den Akker Spider Web curriculum model</li>
                        <li>Select the option that best suits your current educational approach for each question</li>
                    </ul>
                    Submit the Review Advice:
                    <ul>
                        <li>After completing the questionnaire, proceed to the next page.</li>
                        <li>Review the tailored advice provided based on your responses, which will guide you on the necessary changes to implement a community-based learning model effectively.</li>
                    </ul>
                </div>
            </div>
            <div className="preadditionalText">
                Feedback
                <div className="emptyLine"></div>
                <div className="preadditionalText-inner">
                    On each step and page of our website, you will find a "Provide Feedback" button. This button is available to you at all times, and we encourage you to use it to share any problems, misunderstandings, or suggestions you may have. Your feedback is crucial to us, and we are commited to improving your experience based on your input.          
                </div>
            </div>
            <div className="additionalContent">
                <div className="additionalContent-inner">
                    ADDITIONAL NOTE!!!
                    <div className="additionalContent-inner-text">
                        This service is a prototype of the upcoming web-service too. The information provided on the page is based on thorough research but has not been formally approved by educational staff. The information on community-based learning might not be fully accurate, as well as, the tool's advice is objective and may require further research and approval.
                    </div>
                </div>
            </div>
            <div className="checkboxContent">
                <FormControlLabel 
                    control={<Checkbox />} 
                    label="I have read and understood the information provided above."
                    sx={
                        {
                            fontFamily: 'UniversHeaders',
                        }
                    } 
                    />
            </div>
            <Button onClick={onButtonClick}
                sx={{
                    backgroundColor: "#CEFFA7",
                    color: "#000000",
                    width: "300px",
                    height: "50px",
                    alignSelf: "center",
                    fontSize: "20px",
                    margin: "5%",
                    '&:hover': {
                        backgroundColor: "#CEFFA7",
                    },
                }} 
                variant="contained">
                Start
            </Button>
        </div>
    );
}

export default ContentBox;