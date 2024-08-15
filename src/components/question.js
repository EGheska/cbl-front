import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const Question = ({question}) => {
    const [isQuestion, setIsQuestion] = React.useState({
        learning: false,
        aims: false,
        content: false,
        activities: false,
        role: false,
        resources: false,
        grouping: false,
        location: false,
        time: false,
        assesment: false,
    });
    const location = useLocation();

    const data = ['learning', 'aims', 'content', 'activities', 'role', 'resources', 'grouping', 'location', 'time', 'assessment'];


    useEffect(() => {

        setIsQuestion({
            learning: false,
            aims: false,
            content: false,
            activities: false,
            role: false,
            resources: false,
            grouping: false,
            location: false,
            time: false,
            assessment: false,
        });

        setIsQuestion(prevState => ({
            ...prevState,
            [question]: true,
        }));
    }, [question]);

    return (
        <div className="content-box">
            <div className="header-box">
                <div className="header-row">
                    {isQuestion.learning && (
                        <p>Learning Rationale</p>
                    )}
                    {isQuestion.aims && (
                        <p>Aims & Objectives</p>
                    )}
                    {isQuestion.content && (
                        <p>Content</p>
                    )}
                    {isQuestion.activities && (
                        <p>Learning Activities</p>
                    )}
                    {isQuestion.role && (
                        <p>Teacher Role</p>
                    )}
                    {isQuestion.resources && (
                        <p>Materials & Resources</p>
                    )}
                    {isQuestion.grouping && (
                        <p>Grouping</p>
                    )}
                    {isQuestion.location && (
                        <p>Location</p>
                    )}
                    {isQuestion.time && (
                        <p>Time</p>
                    )}
                    {isQuestion.assessment && (
                        <p>Assessment</p>
                    )}
                </div>
                <div className="emptyLine-question-component"></div>
                <div className="header-row">

                </div>
            </div>
            <div className="question-container">
                <div className="content-box"></div>
                <div className="content-box"></div>
                <div className="content-box"></div>
                <div className="content-box"></div>
            </div>
            <div className="number-container">
                <div className="number-box">

                </div>
            </div>
        </div>
    )
};

export default Question;