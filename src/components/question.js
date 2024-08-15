import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const Question = ({items, onQuestionData, currentQuestion}) => {
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
        onQuestionData(data);

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

        const currentType = data[currentQuestion];

        setIsQuestion(prevState => ({
            ...prevState,
            [currentType]: true,
        }));

        // items.forEach((item) => {
        //     if (item.type === "learning" && location.pathname === "/cbl-toolkit" || location.pathname === "/cbl-toolkit/learning") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: true,
        //         }))
        //     } else if (item.type === "aims" && location.pathname === "/cbl-toolkit/aims") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             aims: true,
        //         }))
        //     } else if (item.type === "content" && location.pathname === "/cbl-toolkit/content") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             content: true,
        //         }))
        //     } else if (item.type === "resources" && location.pathname === "/cbl-toolkit/resources") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             resources: true,
        //         }))
        //     } else if (item.type === "activities" && location.pathname === "/cbl-toolkit/activities") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             activities: true,
        //         }))
        //     } else if (item.type === "role" && location.pathname === "/cbl-toolkit/role") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             role: true,
        //         }))
        //     } else if (item.type === "grouping" && location.pathname === "/cbl-toolkit/group") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             grouping: true,
        //         }))
        //     } else if (item.type === "location" && location.pathname === "/cbl-toolkit/location") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             location: true,
        //         }))
        //     } else if (item.type === "time" && location.pathname === "/cbl-toolkit/time") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             time: true,
        //         }))
        //     } else if (item.type === "assessment" && location.pathname === "/cbl-toolkit/assessment") {
        //         setIsQuestion(prevState => ({
        //             ...prevState,
        //             learning: false,
        //             assessment: true,
        //         }))
        //     }
        // })
    }, [items, currentQuestion]);

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