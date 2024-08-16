import React, {useEffect, useState} from "react";
import "../styles/question.css";

const Question = ({question}) => {
    const [isQuestion, setIsQuestion] = useState({
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
                        <p className="header-title">Learning Rationale</p>
                    )}
                    {isQuestion.aims && (
                        <p className="header-title">Aims & Objectives</p>
                    )}
                    {isQuestion.content && (
                        <p className="header-title">Content</p>
                    )}
                    {isQuestion.activities && (
                        <p className="header-title">Learning Activities</p>
                    )}
                    {isQuestion.role && (
                        <p className="header-title">Teacher Role</p>
                    )}
                    {isQuestion.resources && (
                        <p className="header-title">Materials & Resources</p>
                    )}
                    {isQuestion.grouping && (
                        <p className="header-title">Grouping</p>
                    )}
                    {isQuestion.location && (
                        <p className="header-title">Location</p>
                    )}
                    {isQuestion.time && (
                        <p className="header-title">Time</p>
                    )}
                    {isQuestion.assessment && (
                        <p className="header-title">Assessment</p>
                    )}
                </div>
                <div className="emptyLine-question-component"></div>
                <div className="header-row-question">
                    {isQuestion.learning && (
                        <p className="subquestion">Why are students learning?</p>
                    )}
                    {isQuestion.aims && (
                        <p className="subquestion">Towards which goal are they learning?</p>
                    )}
                    {isQuestion.content && (
                        <p className="subquestion">What is the content they are learnin?</p>
                    )}
                    {isQuestion.activities && (
                        <p className="subquestion">What are the activities they follow?</p>
                    )}
                    {isQuestion.role && (
                        <p className="subquestion">What is the teacher role?</p>
                    )}
                    {isQuestion.resources && (
                        <p className="subquestion">What materials and resources are used?</p>
                    )}
                    {isQuestion.grouping && (
                        <p className="subquestion">How are students grouped?</p>
                    )}
                    {isQuestion.location && (
                        <p className="subquestion">Where are they study?</p>
                    )}
                    {isQuestion.time && (
                        <p className="subquestion">When do they study?</p>
                    )}
                    {isQuestion.assessment && (
                        <p className="subquestion">What is the assessment they are taking?</p>
                    )}
                    <p>{`(Please, select the best option that suits you)`}</p>
                </div>
            </div>
            {isQuestion.learning && (
                <div className="question-container">
                    <div className="content-box-question">Students learn to solve a pre-defined problem by answering a driving question that embodies a project's goal.</div>
                    <div className="content-box-question">Students learn to solve a pre-defined ill-structured hypothetical case scenario.</div>
                    <div className="content-box-question">Students learn to interact in and have an active immediate impact on the real world and wicked problems by designing solutions for actionable challenges of personal choice and relevance.</div>
                    <div className="content-box-question">Students engage by applying theory to real-world and community problems, fostering critical thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.</div>
                </div>
            )}
            {isQuestion.aims && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.content && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.activities && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.role && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.resources && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.grouping && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.location && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.time && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            {isQuestion.assesment && (
                <div className="question-container">
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                    <div className="content-box-question"></div>
                </div>
            )}
            <div className="number-container">
                <div className="number-box">

                </div>
            </div>
        </div>
    )
};

export default Question;