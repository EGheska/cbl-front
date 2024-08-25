import React from "react";
import "../styles/advice.css";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";

const Advice = () => {
    const [activeSection, setActiveSection] = useState(null);

    // Create refs for each image section
    const learningRef = useRef(null);
    const aimsRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const learningTop = learningRef.current.getBoundingClientRect().top;
            const aimsTop = aimsRef.current.getBoundingClientRect().top;
            const contentTop = contentRef.current.getBoundingClientRect().top;

            const offset = window.innerHeight / 2; // Trigger when the section is half-way on the screen

            if (learningTop < offset && learningTop >= 0) {
                setActiveSection("Learning Rationale");
            } else if (aimsTop < offset && aimsTop >= 0) {
                setActiveSection("Aims & Objectives");
            } else if (contentTop < offset && contentTop >= 0) {
                setActiveSection("Content");
            }
            // } else {
            //     setActiveSection(null);
            // }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="pageClass-advice">
            <div className="advice-navbar">
                <div className="advice-navbar-container">
                    <div className="navbar-item">
                        <div className={`box ${activeSection === "Aims & Objectives" ? "active" : ""}`}></div>
                        <div className="navbar-item-tag">Learning Rationale</div>
                    </div>
                    <div className="navbar-item">
                        <div className={`box ${activeSection === "Aims & Objectives" ? "active" : ""}`}></div>
                        <div className="navbar-item-tag">Aims & Objectives</div>
                    </div>
                    <div className="navbar-item">
                        <div className={`box ${activeSection === "Aims & Objectives" ? "active" : ""}`}></div>
                        <div className="navbar-item-tag">Content</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div className="navbar-item-tag">Learning Activities</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div className="navbar-item-tag">Teaching Role</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div className="navbar-item-tag">Material & Resources</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div className="navbar-item-tag">Grouping</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div className="navbar-item-tag">Location</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div className="navbar-item-tag">Time</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div className="navbar-item-tag">Assessment</div>
                    </div>
                    {/*<div className="emptyLine-advice"></div>*/}
                    <a  className="advice-link" href="/start">Home</a>
                </div>
            </div>
            <div className="advice-content">
                <div className="advice-conent-header">
                    <span className="advice-content-span">Comunity-Based Learning Helper</span>
                    <div className="emptyLine-advice"></div>
                    <span className="advice-content-span">Advice</span>
                </div>
                <div className="advice-content-inner" ref={learningRef}>
                    <img src="/GroupLearning.png"></img>
                </div>
                <div className="advice-content-inner" ref={aimsRef}>
                    <img src="/GroupAims.png"></img>
                </div>
                <div className="advice-content-inner" ref={contentRef}>
                    <img src="/GroupContent.png" style={{marginRight: "63px"}}></img>
                </div>
            </div>
        </div>
    )
};

export default Advice;