import React, {useEffect, useState} from "react";
import "../styles/question.css";
import {useLocation} from "react-router-dom";

const Question = ({question}) => {
    const location = useLocation();
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (questionKey) => {
        setSelectedQuestion(questionKey);
    }

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
        assessment: false,
    });
    const [number, setNumber] = useState(0);

    const changeNumber = (param)=>{
        if (location.pathname.endsWith("/learning")){
            setNumber(1);
        } else if (location.pathname.endsWith("/aims")){
            setNumber(2);
        } else if (location.pathname.endsWith("/content")){
            setNumber(3);
        } else if (location.pathname.endsWith("/activities")){
            setNumber(4);
        } else if (location.pathname.endsWith("/role")){
            setNumber(5);
        } else if (location.pathname.endsWith("/resources")){
            setNumber(6);
        } else if (location.pathname.endsWith("/group")){
            setNumber(7);
        } else if (location.pathname.endsWith("/location")){
            setNumber(8);
        } else if (location.pathname.endsWith("/time")) {
            setNumber(9);
        } else if (location.pathname.endsWith("/assessment")){
            setNumber(10);
        }
    }

    useEffect(() => {
        setSelectedQuestion(null);
        changeNumber(number)
        //console.log(number);
        console.warn("Question: ", selectedQuestion);

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
        <div className="content-box-question-container">
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
                        <p className="subquestion">What is the content they are learning?</p>
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
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.aims && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                         onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                         onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                         onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                         onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.content && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.activities && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.role && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.resources && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a
                        project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked
                        problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical
                        thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.grouping && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a
                        project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked
                        problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical
                        thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.location && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a
                        project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked
                        problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical
                        thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.time && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a
                        project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked
                        problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical
                        thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            {isQuestion.assessment && (
                <div className="question-container">
                    <div
                        className={`content-box-question ${selectedQuestion === 1 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        Students learn to solve a pre-defined problem by answering a driving question that embodies a
                        project's goal.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 2 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        Students learn to solve a pre-defined ill-structured hypothetical case scenario.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 3 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        Students learn to interact in and have an active immediate impact on the real world and wicked
                        problems by designing solutions for actionable challenges of personal choice and relevance.
                    </div>
                    <div
                        className={`content-box-question ${selectedQuestion === 4 ? 'selected' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        Students engage by applying theory to real-world and community problems, fostering critical
                        thinking, problem-solving, and teamwork for a deeper, more meaningful learning experience.
                    </div>
                </div>
            )}
            <div className="number-container">
                <div className="number-box">
                    {number && (
                        <span>{number}/10</span>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Question;