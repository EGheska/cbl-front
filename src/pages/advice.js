import React from "react";
import "../styles/advice.css";

const Advice = () => {
    return (
        <div className="pageClass-advice">
            <div className="advice-navbar">
                <div className="advice-navbar-container">
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Learning Rationale</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Aims & Objectives</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Content</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Learning Activities</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Teaching Role</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Material & Resources</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Grouping</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Location</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Time</div>
                    </div>
                    <div className="navbar-item">
                        <div className="box"></div>
                        <div>Assessment</div>
                    </div>
                    <div className="emptyLine"></div>
                    <a href="/start">Home</a>
                </div>
            </div>
            <div className="advice-content">
                ADVICE CONTENT here
            </div>
        </div>
    )
};

export default Advice;